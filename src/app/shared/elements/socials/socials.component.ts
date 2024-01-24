import { NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IconModel } from '@open-profiler/models/icon.model';
import { BadgesUtil } from '@open-profiler/utils/badges.util';

@Component({
  standalone: true,
  imports: [NgOptimizedImage],
  selector: 'open-profiler-socials',
  styleUrl: './socials.component.scss',
  templateUrl: './socials.component.html',
})
export class SocialsComponent implements OnInit {
  @Input() color: string = '1db954';
  @Input() socials: IconModel[] = [];

  constructor() {}

  ngOnInit(): void {
    this.socials = BadgesUtil.setLinkIcon(this.socials, this.color);
  }
}
