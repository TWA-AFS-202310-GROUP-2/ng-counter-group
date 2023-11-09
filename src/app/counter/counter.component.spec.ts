import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase number when click +', () => {
    component.number = 2;
    component.onIncrease();
    expect(component.number).toEqual(3);
  });

  it('should decrease number when click -', () => {
    component.number = 2;
    component.onDecrease();
    expect(component.number).toEqual(1);
  });

  it('should reset number to 0 when click reset', () => {
    component.number = 2;
    component.onReset();
    expect(component.number).toEqual(0);
  });

  it('should be green', () => {
    component.number = -1;
    expect(component.textBackgroundColor).toEqual('green');
  });
});
