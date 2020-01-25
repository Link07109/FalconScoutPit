import {Component, Input } from '@angular/core';

@Component({
  selector: 'skeleton-card',
  templateUrl: './skeleton-card.component.html',
  styleUrls: ['./skeleton-card.component.scss'],
})
export class SkeletonCardComponent {

  constructor() { }

  @Input()
  array: [];

}
