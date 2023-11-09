import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  number = 0
  OnIncrease()
  {
    this.number++
  }
  OnDecrease()
  {
    this.number--
  }
}
