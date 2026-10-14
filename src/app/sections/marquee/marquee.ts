import { Component } from '@angular/core';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.html',
  styleUrl: './marquee.scss',
})
export class Marquee {
  protected readonly items = ['Angular', 'TypeScript', 'RxJS', 'Node.js', 'Express', 'ReactJS', 'ASP.NET Core', 'Firebase', 'Firestore', 'GCP', 'Flutter', 'Playwright', 'Claude Code', 'MCP'];
}
