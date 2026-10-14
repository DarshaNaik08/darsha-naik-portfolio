import { Component } from '@angular/core';
import { Reveal } from '../../effects/reveal';
import { SKILLS } from '../../data/portfolio.data';

@Component({
  imports: [Reveal],
  selector: 'app-skills',
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
   
})
export class Skills {
  protected readonly groups = SKILLS;
}
