import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponent } from './counter-group.component';
import { AppComponent } from '../app.component';
import { CounterComponent } from '../counter/counter.component';

describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterGroupComponent,CounterComponent]
    });
    fixture = TestBed.createComponent(CounterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return a counter when OnAdd given click button', () => {
    component.counters = []

    component.OnAdd()

    expect(component.counters.length).toEqual(1);
  });

  it('should return null when OnDelete given nothing', () => {
    component.counters =[
      { num: 1 },
      { num: 2 },
      { num: 3 }]

    component.OnDelete()

    expect(component.counters.length).toEqual(0);
  });

  it('should return updated counters When OnRemove given index i', () => {
    component.counters =[
      { num: 1 },
      { num: 2 },
      { num: 3 }]

    component.onRemove(2)

    expect(component.counters.length).toEqual(2);
  });
});
