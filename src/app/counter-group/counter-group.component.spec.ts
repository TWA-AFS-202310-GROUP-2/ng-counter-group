import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponent } from './counter-group.component';
import { CounterComponent } from '../counter/counter.component';

describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterGroupComponent, CounterComponent]
    });
    fixture = TestBed.createComponent(CounterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all sum', () => {
    const beforePush = component.Sum;

    component.counters.push({ num: 1 });
    const afterPush = component.Sum;

    expect(beforePush + 1).toEqual(afterPush);
  });


  it('should get lenth+1 when add counter', () => {
    const lengthBeforeAdd = component.counters.length;

    component.onAddCounter();
    const lengthAfterAdd = component.counters.length;

    expect(lengthBeforeAdd + 1).toEqual(lengthAfterAdd);

  });

  it('should get lenth-1 when delete a counter', () => {
    const lengthBeforeDelete = component.counters.length;

    component.onRemoveCounter(0);
    const lengthAfterDelete = component.counters.length;

    expect(lengthBeforeDelete - 1).toEqual(lengthAfterDelete);

  });

  it('should get sum=0 when resetall', () => {
    const lengthBeforeReset = component.Sum;

    component.onResetAll();
    const lengthAfterReset = component.Sum;

    expect(0).toEqual(lengthAfterReset);
  });
});
