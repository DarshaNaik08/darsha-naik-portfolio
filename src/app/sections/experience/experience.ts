import { Component } from '@angular/core';
import { Reveal } from '../../effects/reveal';
import { PROFILE, ROLES } from '../../data/portfolio.data';

@Component({
  imports: [Reveal],
  selector: 'app-experience',
  templateUrl: './experience.html',
})
export class Experience {
  protected readonly roles = ROLES;
  protected readonly profile = PROFILE;
}
