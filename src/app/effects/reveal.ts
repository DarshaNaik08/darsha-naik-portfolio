import { Directive, ElementRef, OnDestroy, OnInit, inject, input, signal } from '@angular/core';

/** Adds `.in` once the element scrolls into view. Optional stagger: appReveal="120" (ms). */
@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[class.in]': 'shown()',
    '[style.--d]': 'delay() + "ms"',
  },
})
export class Reveal implements OnInit, OnDestroy {
  readonly delay = input<number, number | string>(0, {
    alias: 'appReveal',
    transform: (v) => Number(v) || 0,
  });
  protected readonly shown = signal(false);
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private io?: IntersectionObserver;

  ngOnInit(): void {
    if (typeof IntersectionObserver === 'undefined') { this.shown.set(true); return; }
    this.io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        this.shown.set(true);
        this.io?.disconnect();
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    this.io.observe(this.el);
  }

  ngOnDestroy(): void { this.io?.disconnect(); }
}
