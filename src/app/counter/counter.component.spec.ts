import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChanges } from '@angular/core';

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

  // it('should update currentCount when ngOnChanges is called with new value', () => {
  //   // given
  //   const newCount = 5;
  //   const changesObj: SimpleChanges = {
  //     currentCount: {
  //       previousValue: component.currentCount,
  //       currentValue: newCount,
  //       firstChange: false,
  //       isFirstChange: () => false
  //     }
  //   };

  //   // when
  //   component.ngOnChanges(changesObj);

  //   // then
  //   expect(component.currentCount).toBe(newCount);
  // });

  it('should emit removeCounterEvent with currentCount when removeCounter is called', () => {
    // given
    spyOn(component.removeCounterEvent, 'emit'); // Spy on the emit method
    const initialCount = 3;
    component.currentCount = initialCount;

    // when
    component.removeCounter();

    // then
    expect(component.removeCounterEvent.emit).toHaveBeenCalledWith(initialCount);
  });

});