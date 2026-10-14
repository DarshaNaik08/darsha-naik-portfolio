import { Component } from '@angular/core';
import { Reveal } from '../../effects/reveal';
import { Magnetic } from '../../effects/magnetic';
import { PROFILE } from '../../data/portfolio.data';

@Component({
  imports: [Reveal, Magnetic],
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  protected readonly profile = PROFILE;
}