import { Component } from '@angular/core';
import { SiteHeader } from './sections/site-header/site-header';
import { Hero } from './sections/hero/hero';
import { Marquee } from './sections/marquee/marquee';
import { Work } from './sections/work/work';
import { Experience } from './sections/experience/experience';
import { Skills } from './sections/skills/skills';
import { Contact } from './sections/contact/contact';
import { PointerFx } from './effects/pointer-fx';
import { PROFILE } from './data/portfolio.data';

@Component({
  selector: 'app-root',
  imports: [PointerFx, SiteHeader, Hero, Marquee, Work, Experience, Skills, Contact],
  template: `
    <app-pointer-fx />
    <app-site-header />
    <main id="top">
      <app-hero />
      <app-marquee />
      <app-work />
      <app-experience />
      <app-skills />
      <app-contact />
    </main>
    <footer>
      <div class="wrap">{{ profile.name }} · {{ profile.location }}</div>
    </footer>
  `,
  styles: `
    main,footer{position:relative;z-index:1}
    footer{border-top:1px solid var(--rule);padding:1.75rem 0 2.5rem;color:var(--muted);font-size:.9rem}
  `,
})
export class App {
  protected readonly profile = PROFILE;
}
