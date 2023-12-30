import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeModel } from '@open-profiler/models/badge.model';

@Component({
  standalone: true,
  selector: 'open-profiler-badges',
  styleUrl: './badges.component.scss',
  templateUrl: './badges.component.html',
  imports: [NgOptimizedImage],
})
export class BadgesComponent {
  @Input() bgSecondLevel: boolean = false;
  @Input() list: BadgeModel[] | undefined = [];

  constructor() {}
}
