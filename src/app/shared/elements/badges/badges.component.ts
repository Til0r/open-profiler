import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { BadgeModel } from '@open-profiler/models/badge.model';
import { BadgesUtil } from '@open-profiler/utils/badges.util';

@Component({
  standalone: true,
  selector: 'open-profiler-badges',
  styleUrl: './badges.component.scss',
  templateUrl: './badges.component.html',
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgesComponent {
  color = input('1db954');
  list = input<BadgeModel[]>([]);

  listMapped = computed(() => BadgesUtil.setLinkIcon(this.list(), this.color()));

  constructor() {}
}
