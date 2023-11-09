import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent {
  counters = Array<CounterComponent>();

  addCounter() {
    this.counters.push(new CounterComponent());
  }

  resetCounters() {
    this.counters.forEach(counter => counter.resetCounter());
  }

  get sum(){
    return this.counters.reduce((result,current) => result + current.currentCount,0);
  }
}
