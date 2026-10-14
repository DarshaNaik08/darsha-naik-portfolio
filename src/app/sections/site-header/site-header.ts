import { Component, ElementRef, inject, signal } from '@angular/core';
import { PROFILE } from '../../data/portfolio.data';

@Component({
  selector: 'app-site-header',
  host: {
    '(document:keydown.escape)': 'close()',
    '(document:click)': 'onDocumentClick($event)',
  },
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
})
export class SiteHeader {
  protected readonly profile = PROFILE;
  protected readonly open = signal(false);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  protected readonly links = [
    { href: '#work', label: 'Work' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ];

  protected toggle(): void { this.open.update((v) => !v); }
  protected close(): void { if (this.open()) this.open.set(false); }
  protected onDocumentClick(e: Event): void {
    if (this.open() && !this.host.contains(e.target as Node)) this.open.set(false);
  }
}