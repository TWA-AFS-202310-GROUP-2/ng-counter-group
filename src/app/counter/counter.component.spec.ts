import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { CounterGroupComponent } from '../counter-group/counter-group.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent, CounterGroupComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Increase', () => {
    component.Number = 5;

    component.onIncrease();

    expect(component.Number).toEqual(6);
  });

  it('should Decrease', () => {
    component.Number = 5;

    component.onDescrease();

    expect(component.Number).toEqual(4);
  });

  it('should be removed', () => {
    component.Number = 5;

    component.onRemove();

    expect(component.Number).toEqual(5);
  });
  it('should be reset', () => {
    component.Number = 5;

    component.onReset();

    expect(component.Number).toEqual(0);
  });
});
