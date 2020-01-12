import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'falcon-toolbar',
  templateUrl: './falcon-toolbar.component.html',
  styleUrls: ['./falcon-toolbar.component.scss'],
})
export class FalconToolbarComponent {

  constructor() { }

  @Input()
  title: string;

  @Input()
  startIcon: string;

  @Input()
  endIcon: string;

  @Output()
  startClicked = new EventEmitter();

  @Output()
  endClicked = new EventEmitter();

  startClick() {
    this.startClicked.emit();
  }

  endClick() {
    this.endClicked.emit();
  }

}
