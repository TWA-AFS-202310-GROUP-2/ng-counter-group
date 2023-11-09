import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() number = 0

  @Output() valueChangeEvent = new EventEmitter<number>()
  @Output() removeEvent = new EventEmitter<boolean>()

  onIncrease() {
    this.number++
    this.valueChangeEvent.emit(this.number)
  }

  onDecrease() {
    this.number--
    this.valueChangeEvent.emit(this.number)
  }

  onRemove() {
    this.removeEvent.emit(true);
  }

  onReset() {
    this.number = 0
    this.valueChangeEvent.emit(this.number)
  }
}
