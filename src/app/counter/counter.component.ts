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

  // ngOnChanges(changes : SimpleChanges) {
  //   if (changes['currentCount']) {
  //     // This will get called when the input value property changes
  //     this.currentCount = changes['currentCount'].currentValue;
  //   }
  // }
    

  // 5. Add a public method named incrementCounter.
  // 6. Add a public method named decrementCounter.
  // 7. Add a public method named resetCounter.
  public incrementCounter() {
    this.currentCount++;
    this.valueChange.emit(this.currentCount);
    this.setSpanColor();
    this.setButtonDisabled();
  }

  public decrementCounter() {
    this.currentCount--;
    this.valueChange.emit(this.currentCount);
    this.setSpanColor();
    this.setButtonDisabled();
  }

  public resetCounter() {
    this.currentCount = 0;
    this.valueChange.emit(this.currentCount);
    this.setSpanColor();
    this.setButtonDisabled();
  }

  // 8. Add a private method named setSpanColor.
  // 9. Add a private method named setButtonDisabled.
  private setSpanColor() {
    if (this.currentCount < 0) {
      this.spanColor = 'green';
    } else if (this.currentCount > 10) {
      this.spanColor = 'red';
    } else {
      this.spanColor = '';
    }
  }

  private setButtonDisabled() {
    if (this.currentCount > 10) {
      this.isDisabledAddButton = true;
    } else {
      this.isDisabledAddButton = false;
    }

    if (this.currentCount < 0) {
      this.isDisabledSubtractButton = true;
    } else {
      this.isDisabledSubtractButton = false;
    }
  }
}
