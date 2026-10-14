import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewEncapsulation, inject, viewChild } from '@angular/core';

/**
 * Page-wide pointer effects:
 *  - dot grid that lights up around the pointer
 *  - soft glow and a trailing ring that grows over links and buttons
 *  - ripple on click
 *  - scroll progress bar
 * Sets --mx/--my (pointer px) and --px/--py (-1..1, eased) on <html> for other components.
 * Pointer effects switch off on touch devices and with reduced motion.
 */
@Component({
  selector: 'app-pointer-fx',
  encapsulation: ViewEncapsulation.None,
  host: { 'aria-hidden': 'true' },
  template: `
    <div class="fx-grid"></div>
    <div class="fx-glow"></div>
    <div class="fx-ring" #ring><i></i></div>
    <div class="fx-bar"></div>
  `,
  styles: `
    .fx-grid{position:fixed;inset:0;z-index:0;pointer-events:none;opacity:0;transition:opacity .4s;
      background-image:radial-gradient(circle,var(--cobalt) 1.3px,transparent 1.7px);background-size:28px 28px;
      -webkit-mask-image:radial-gradient(circle 210px at var(--mx,50%) var(--my,30%),#000 0,transparent 100%);
      mask-image:radial-gradient(circle 210px at var(--mx,50%) var(--my,30%),#000 0,transparent 100%)}
    .fx-live .fx-grid{opacity:.5}
    .fx-glow{position:fixed;left:0;top:0;width:560px;height:560px;z-index:0;pointer-events:none;border-radius:50%;
      background:radial-gradient(circle,color-mix(in srgb,var(--cobalt) 16%,transparent),transparent 65%);
      transform:translate3d(calc(var(--mx,0px) - 280px),calc(var(--my,0px) - 280px),0);opacity:0;transition:opacity .4s;will-change:transform}
    .fx-live .fx-glow{opacity:1}
    .fx-ring{position:fixed;left:0;top:0;z-index:40;pointer-events:none;opacity:0;transition:opacity .3s;will-change:transform}
    .fx-live .fx-ring{opacity:1}
    .fx-ring i{display:block;width:34px;height:34px;border:1.5px solid var(--cobalt);border-radius:50%;transition:transform .25s,background .25s}
    .fx-ring.hot i{transform:scale(1.7);background:color-mix(in srgb,var(--cobalt) 14%,transparent)}
    .fx-bar{position:fixed;left:0;top:0;height:3px;width:100%;z-index:30;pointer-events:none;background:var(--cobalt);
      transform-origin:left;transform:scaleX(var(--progress,0))}
    .fx-ripple{position:fixed;z-index:39;pointer-events:none;width:10px;height:10px;margin:-5px 0 0 -5px;border-radius:50%;
      border:2px solid var(--cobalt);animation:fx-ripple .6s ease-out forwards}
    @keyframes fx-ripple{to{transform:scale(9);opacity:0}}
  `,
})
export class PointerFx implements AfterViewInit, OnDestroy {
  private readonly zone = inject(NgZone);
  private readonly ring = viewChild.required<ElementRef<HTMLElement>>('ring');
  private readonly cleanups: Array<() => void> = [];
  private raf = 0;

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => this.start());
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.raf);
    this.cleanups.forEach((fn) => fn());
  }

  private listen<K extends keyof WindowEventMap>(target: Window | Document, type: K | string, fn: (e: any) => void, opts?: AddEventListenerOptions): void {
    target.addEventListener(type, fn, opts);
    this.cleanups.push(() => target.removeEventListener(type, fn));
  }

  private start(): void {
    const root = document.documentElement;
    const ring = this.ring().nativeElement;

    const progress = () => {
      const max = root.scrollHeight - innerHeight;
      root.style.setProperty('--progress', max > 0 ? String(Math.min(1, scrollY / max)) : '0');
    };
    this.listen(window, 'scroll', progress, { passive: true });
    this.listen(window, 'resize', progress);
    progress();

    const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
    const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || calm) return;

    let tx = innerWidth / 2, ty = innerHeight / 3;
    let rx = tx, ry = ty, px = 0, py = 0;
    let running = false;
    let seen = false;

    const tick = () => {
      rx += (tx - rx) * 0.16;
      ry += (ty - ry) * 0.16;
      px += ((tx / innerWidth) * 2 - 1 - px) * 0.08;
      py += ((ty / innerHeight) * 2 - 1 - py) * 0.08;
      root.style.setProperty('--px', px.toFixed(3));
      root.style.setProperty('--py', py.toFixed(3));
      ring.style.transform = `translate3d(${rx.toFixed(1)}px, ${ry.toFixed(1)}px, 0) translate(-50%, -50%)`;
      const settled = Math.abs(tx - rx) < 0.2 && Math.abs(ty - ry) < 0.2 && Math.abs((tx / innerWidth) * 2 - 1 - px) < 0.002;
      if (settled) { running = false; return; }
      this.raf = requestAnimationFrame(tick);
    };
    const wake = () => { if (!running) { running = true; this.raf = requestAnimationFrame(tick); } };

    this.listen(window, 'pointermove', (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      tx = e.clientX; ty = e.clientY;
      root.style.setProperty('--mx', tx + 'px');
      root.style.setProperty('--my', ty + 'px');
      if (!seen) { seen = true; rx = tx; ry = ty; }
      root.classList.add('fx-live');
      wake();
    }, { passive: true });

    this.listen(document, 'pointerover', (e: Event) => {
      const hot = (e.target as Element | null)?.closest?.('a, button, [role="tab"]');
      ring.classList.toggle('hot', !!hot);
    });
    this.listen(document, 'mouseleave', () => root.classList.remove('fx-live'));
    this.listen(document, 'pointerdown', (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      const dot = document.createElement('div');
      dot.className = 'fx-ripple';
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
      dot.addEventListener('animationend', () => dot.remove());
      document.body.appendChild(dot);
    });
  }
}
