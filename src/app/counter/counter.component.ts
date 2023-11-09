import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  @Input() number = 0;
  @Output() change = new EventEmitter();
  @Output() remove = new EventEmitter();

  backgroundColor = '';

  onIncrease() {
    this.number++;
    this.change.emit(this.number);
  }

  onDecrease() {
    this.number--;
    this.change.emit(this.number);
  }

  onReset() {
    this.number = 0;
    this.change.emit(this.number);
  }

  onRemove() {
    this.remove.emit();
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
