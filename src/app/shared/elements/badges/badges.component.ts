import { NgOptimizedImage } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BadgeModel } from '@open-profiler/models/badge.model';
import { BadgesUtil } from '@open-profiler/utils/badges.util';

@Component({
  standalone: true,
  selector: 'open-profiler-badges',
  styleUrl: './badges.component.scss',
  templateUrl: './badges.component.html',
  imports: [NgOptimizedImage],
})
export class BadgesComponent implements OnInit {
  @Input() color: string = '1db954';
  @Input() list: BadgeModel[] = [];
  @Input() bgSecondLevel: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.list = BadgesUtil.setLinkIcon(this.list, this.color);
  }
}
