import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css'],
})
export class CounterGroupComponent {
  counters: { num: number }[] = [{ num: 0 }, { num: 0 }, { num: 0 }];

  get sum() {
    return this.counters.reduce((result, current) => result + current.num, 0);
  }

  onAdd() {
    this.counters.push({ num: 0 });
  }

  onRemove(index: number) {
    this.counters.splice(index, 1);
  }

  onReset() {
    for (let elem of this.counters) {
      elem.num = 0;
    }
  }
}
