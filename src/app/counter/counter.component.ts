import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() number = 0

  @Output() valueChangeEvent = new EventEmitter<number>()

  onIncrease(){
    this.number++
    this.valueChangeEvent.emit(this.number)
  }

  onDecrease(){
    this.number--
    this.valueChangeEvent.emit(this.number)
  }
}
