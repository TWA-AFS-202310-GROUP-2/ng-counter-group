import { Component,Output,EventEmitter,Input,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() currentCount = 0;
  public spanColor = '';
  public isDisabledAddButton = false;
  public isDisabledSubtractButton = false;
  @Output() valueChange = new EventEmitter<number>();
  @Output() removeCounterEvent = new EventEmitter<number>();

  ngOnChanges(changes : SimpleChanges) {
    if (changes['currentCount']) {
      this.currentCount = changes['currentCount'].currentValue;
    }
  }
  public incrementCounter() {
    this.currentCount++;
    this.valueChange.emit(this.currentCount);
  }

  public decrementCounter() {
    this.currentCount--;
    this.valueChange.emit(this.currentCount);
  }

  public resetCounter() {
    this.currentCount = 0;
    this.valueChange.emit(this.currentCount);
  }

  public removeCounter() {
    this.removeCounterEvent.emit(this.currentCount);
  }

 
}
