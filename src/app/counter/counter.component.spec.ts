import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

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

  it('should increase number when call OnIncrease', () => 
  {
    // given
    component.number = 2
    // when
    component.OnIncrease()
    // then
    expect(component.number).toEqual(3)
  })

  it('should decrease number when call OnDecrease', () => 
  {
    // given
    component.number = 2
    // when
    component.OnDecrease()
    // then
    expect(component.number).toEqual(1)
  })

  it('should reset number when call OnReset', () => 
  {
    // given
    component.number = 2
    // when
    component.OnReset()
    // then
    expect(component.number).toEqual(0)
  })
  
  it('should reset number when call OnReset', () => 
  {
    // given
    component.number = 2
    // when
    component.OnReset()
    // then
    expect(component.number).toEqual(0)
  })

  it('should remove one when call OnRemove', () => 
  {
    // given
    component.number = 2
    // when
    component.OnRemove()
    // then
    expect(component.number).toEqual(2)
  })

});
