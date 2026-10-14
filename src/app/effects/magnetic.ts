import { Directive, ElementRef, NgZone, OnDestroy, OnInit, inject } from '@angular/core';

/** Nudges the element toward the pointer while hovering (fine pointers only). */
@Directive({ selector: '[appMagnetic]' })
export class Magnetic implements OnInit, OnDestroy {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly zone = inject(NgZone);

  private readonly move = (e: PointerEvent) => {
    const r = this.el.getBoundingClientRect();
    const x = (e.clientX - (r.left + r.width / 2)) * 0.25;
    const y = (e.clientY - (r.top + r.height / 2)) * 0.35;
    this.el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
  };
  private readonly leave = () => { this.el.style.transform = ''; };

  ngOnInit(): void {
    const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
    const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || calm) return;
    this.zone.runOutsideAngular(() => {
      this.el.addEventListener('pointermove', this.move);
      this.el.addEventListener('pointerleave', this.leave);
    });
  }

  ngOnDestroy(): void {
    this.el.removeEventListener('pointermove', this.move);
    this.el.removeEventListener('pointerleave', this.leave);
  }
}
