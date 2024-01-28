import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ExperienceModel } from '@open-profiler/models/experience.model';
import { BadgesComponent } from '../badges/badges.component';

@Component({
  standalone: true,
  selector: 'open-profiler-experience',
  styleUrl: './experience.component.scss',
  imports: [CommonModule, BadgesComponent],
  templateUrl: './experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  colorBadges = input<string>('');
  experiences = input<ExperienceModel[]>([]);

  constructor() {}
}
