import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponent } from './counter-group.component';
import { CounterComponent } from '../counter/counter.component';

describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterGroupComponent, CounterComponent],
    });
    fixture = TestBed.createComponent(CounterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset all counters when click reset button aside Sum', () => {
    component.counters = [];
    component.counters.push({ num: 1 });
    component.counters.push({ num: 2 });
    component.counters.push({ num: 3 });

    component.onReset();

    let all_zero = true;
    for (let elem of component.counters) {
      if (elem.num !== 0) {
        all_zero = false;
        break;
      }
    }

    expect(all_zero).toEqual(true);
  });

  it('Sum should minus one when click "-" button', () => {
    component.counters = [];
    component.counters.push({ num: 1 });
    component.counters.push({ num: 2 });
    component.counters.push({ num: 3 });

    component.counters[0].num = 0;

    let sum = 0;
    for (let elem of component.counters) {
      sum += elem.num;
    }

    expect(sum).toEqual(5);
  });

  it('Sum should plus one when click "+" button', () => {
    component.counters = [];
    component.counters.push({ num: 1 });
    component.counters.push({ num: 2 });
    component.counters.push({ num: 3 });

    component.counters[0].num = 2;

    let sum = 0;
    for (let elem of component.counters) {
      sum += elem.num;
    }

    expect(sum).toEqual(7);
  });

  it('should remove one counter when click "Remove" button', () => {
    component.counters = [];
    component.counters.push({ num: 1 });
    component.counters.push({ num: 2 });
    component.counters.push({ num: 3 });

    component.onRemove(0);

    expect(component.counters.length).toEqual(2);
  });
});
