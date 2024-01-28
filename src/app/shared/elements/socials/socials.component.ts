import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { IconModel } from '@open-profiler/models/icon.model';
import { BadgesUtil } from '@open-profiler/utils/badges.util';

@Component({
  standalone: true,
  imports: [NgOptimizedImage],
  selector: 'open-profiler-socials',
  styleUrl: './socials.component.scss',
  templateUrl: './socials.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialsComponent {
  color = input('1db954');
  socials = input<IconModel[]>([]);
  socialsMapped = computed(() => BadgesUtil.setLinkIcon(this.socials(), this.color()));

  constructor() {}
}
