import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponent } from './counter-group.component';

describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterGroupComponent]
    });
    fixture = TestBed.createComponent(CounterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should counters is empty when create CounterGroupComponent', () => {
    // given 
    // when
    // then
    expect(component.counters.length).toEqual(0);
  });

  it('should counters contain 1 CounterComponent when addCounter is called', () => {
    // given 
    // when
    component.addCounter();
    // then
    expect(component.counters.length).toEqual(1);
  });

  it('should counters contain 2 CounterComponent when addCounter is called given counters contain 1 CounterComponent', () => {
    // given 
    component.addCounter();
    // when
    component.addCounter();
    // then
    expect(component.counters.length).toEqual(2);
  });

  it('should counters contain 1 CounterComponent when removeCounter is called given counters contain 2 CounterComponent', () => {
    // given 
    component.addCounter();
    component.addCounter();
    // when
    component.removeCounter(0);
    // then
    expect(component.counters.length).toEqual(1);
  });

  it('should sum is 0 when sum given counters is empty', () => {
    // given 
    // when
    const sum = component.sum;
    // then
    expect(sum).toEqual(0);
  });

  it('should sum is 2 when sum given counters contain 2 CounterComponent and currentCount is 1', () => {
    // given 
    component.addCounter();
    component.addCounter();
    component.counters[0].currentCount = 1;
    component.counters[1].currentCount = 1;
    // when
    const sum = component.sum;
    // then
    expect(sum).toEqual(2);
  });

  it('should sum is 0 when resetCounters given counters contain 2 CounterComponent and currentCount is 1', () => {
    // given 
    component.addCounter();
    component.addCounter();
    component.counters[0].currentCount = 1;
    component.counters[1].currentCount = 1;
    expect(component.sum).toEqual(2);
    // when
    component.resetCounters();
    const sum = component.sum;
    // then
    expect(sum).toEqual(0);
  });
});
