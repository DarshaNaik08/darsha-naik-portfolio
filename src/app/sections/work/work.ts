import { Component } from '@angular/core';
import { Reveal } from '../../effects/reveal';
import { PROJECTS } from '../../data/portfolio.data';

@Component({
  imports: [Reveal],
  selector: 'app-work',
  templateUrl: './work.html',
})
export class Work {
  protected readonly projects = PROJECTS;
}
