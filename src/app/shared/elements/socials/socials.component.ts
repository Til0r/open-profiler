import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconModel } from '@open-profiler/models/icon.model';

@Component({
  standalone: true,
  imports: [NgOptimizedImage],
  selector: 'open-profiler-socials',
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.scss',
})
export class SocialsComponent {
  @Input() socials: IconModel[] = [];

  constructor() {}
}
