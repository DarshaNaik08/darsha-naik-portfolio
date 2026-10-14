import { Component, computed, signal } from '@angular/core';
import { LAYERS, PROFILE } from '../../data/portfolio.data';
import { Avatar } from '../avatar/avatar';
import { Magnetic } from '../../effects/magnetic';

@Component({
  selector: 'app-hero',
  imports: [Avatar, Magnetic],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly profile = PROFILE;
  protected readonly layers = LAYERS;
  protected readonly words = (() => {
    let offset = 0;
    return PROFILE.name.split(' ').map((text) => {
      const w = { text, chars: text.split(''), offset };
      offset += text.length;
      return w;
    });
  })();
  protected readonly selectedId = signal(LAYERS[0].id);
  protected readonly selected = computed(() => LAYERS.find(l => l.id === this.selectedId()) ?? LAYERS[0]);

  protected select(id: string, focus = false): void {
    this.selectedId.set(id);
    if (focus) document.getElementById('tab-' + id)?.focus();
  }

  protected onKey(e: KeyboardEvent, i: number): void {
    const last = LAYERS.length - 1;
    let next: number | null = null;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') next = i === last ? 0 : i + 1;
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') next = i === 0 ? last : i - 1;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = last;
    if (next !== null) { e.preventDefault(); this.select(LAYERS[next].id, true); }
  }
}