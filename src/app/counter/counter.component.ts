import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  @Input() number = 0;
  backgroundColor = '';

  onIncrease() {
    this.number++;
  }

  onDecrease() {
    this.number--;
  }

  onReset() {
    this.number = 0;
  }

  get textBackgroundColor() {
    if (this.number > 10) return 'red';
    else if (this.number < 0) return 'green';
    else return '';
  }

  get disableIncreaseButton() {
    if (this.number > 10) return true;
    else return false;
  }

  get disableDecreaseButton() {
    if (this.number < 0) return true;
    else return false;
  }
}
