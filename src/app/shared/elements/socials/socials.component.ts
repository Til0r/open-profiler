import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ImageErrorHandlerDirective } from '@open-profiler/directives/image-error-handler.directive';
import { IconModel } from '@open-profiler/models/icon.model';
import { BadgesUtil } from '@open-profiler/utils/badges.util';

@Component({
  standalone: true,
  selector: 'open-profiler-socials',
  styleUrl: './socials.component.scss',
  templateUrl: './socials.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgOptimizedImage, ImageErrorHandlerDirective],
})
export class SocialsComponent {
  color = input('1db954');
  socials = input<IconModel[]>([]);
  socialsMapped = computed(() => BadgesUtil.setLinkIcon(this.socials(), this.color()));

  constructor() {}
}
