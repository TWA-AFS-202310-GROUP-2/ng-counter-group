import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should currentCount is 0 when create CounterComponent', () => {
    // given 
    // when
    // then
    expect(component.currentCount).toEqual(0);
  });

  it('should currentCount is 1 when call incrementCounter given currentCount is 0', () => {
    // given 
    component.currentCount = 0;
    // when
    component.incrementCounter();
    // then
    expect(component.currentCount).toEqual(1);
  });
  
  it('should currentCount is -1 when call decrementCounter given currentCount is 0', () => {
    // given 
    component.currentCount = 0;
    // when
    component.decrementCounter();
    // then
    expect(component.currentCount).toEqual(-1);
  });

  it('should currentCount is 0 when call resetCounter given currentCount is 1', () => {
    // given 
    component.currentCount = 1;
    // when
    component.resetCounter();
    // then
    expect(component.currentCount).toEqual(0);
  });

});
