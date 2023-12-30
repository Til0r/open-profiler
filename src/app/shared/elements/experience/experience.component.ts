import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ExperienceModel } from '@open-profiler/models/experience.model';
import { BadgesComponent } from '../badges/badges.component';

@Component({
  standalone: true,
  selector: 'open-profiler-experience',
  styleUrl: './experience.component.scss',
  imports: [CommonModule, BadgesComponent],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  @Input() flatBackground: boolean = true;
  @Input() experiences: ExperienceModel[] = [];

  constructor() {}
}
