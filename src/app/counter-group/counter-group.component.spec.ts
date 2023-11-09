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

  it('should OnAdd', () => {
    component.counters = []

    component.OnAdd()

    expect(component.counters.length).toEqual(1);
  });

  it('should OnDelete', () => {
    component.counters =[
      { num: 1 },
      { num: 2 },
      { num: 3 }]

    component.OnDelete()

    expect(component.counters.length).toEqual(0);
  });
});
