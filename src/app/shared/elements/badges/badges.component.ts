import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ImageErrorHandlerDirective } from '@open-profiler/directives/image-error-handler.directive';
import { BadgeModel } from '@open-profiler/models/badge.model';
import { setLinkIcon } from '@open-profiler/utils/badges.util';

@Component({
  standalone: true,
  selector: 'open-profiler-badges',
  styleUrl: './badges.component.scss',
  templateUrl: './badges.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ImageErrorHandlerDirective, NgOptimizedImage],
})
export class BadgesComponent {
  color = input('3EA44F');
  list = input<BadgeModel[]>([]);

  listMapped = computed(() => setLinkIcon(this.list(), this.color()));

  constructor() {}
}
