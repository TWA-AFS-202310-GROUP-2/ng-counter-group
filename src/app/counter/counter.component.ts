import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() number = 0
  @Output() change = new EventEmitter()
  
  @Input() indexToBeRemoved:number = 0
  @Output() removeFlag = new EventEmitter()

  OnIncrease()
  {
    this.number++
    this.change.emit(this.number)
  }
  
  OnDecrease()
  {
    this.number--
    this.change.emit(this.number)
  }

  OnReset()
  {
    this.number=0
    this.change.emit(this.number)
  }

  OnRemove()
  {
    this.removeFlag.emit(this.indexToBeRemoved)
  }
}
