import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconModel } from '@open-profiler/models/icon.model';

@Component({
  standalone: true,
  imports: [NgOptimizedImage],
  selector: 'open-profiler-socials',
  styleUrl: './socials.component.scss',
  templateUrl: './socials.component.html',
})
export class SocialsComponent {
  @Input() socials: IconModel[] = [];

  constructor() {}
}
