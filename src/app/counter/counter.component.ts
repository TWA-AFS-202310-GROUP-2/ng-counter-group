import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input()
  Number: number = 0;
  @Output() change = new EventEmitter();

  @Input() removeIndex = 0;
  @Output() removeOps = new EventEmitter();

  public onDescrease() {
    this.Number--;
    this.change.emit(this.Number);
  }
  public onIncrease() {
    this.Number++;
    this.change.emit(this.Number);
  }
  public onRemove() {
    this.removeOps.emit(this.removeIndex);
  }
  public onReset() {
    this.Number = 0;
    this.change.emit(this.Number);
  }
}
