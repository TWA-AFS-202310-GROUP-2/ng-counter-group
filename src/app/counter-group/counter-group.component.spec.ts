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

  it('should add a counter when call OnAdd', () => 
  {
    // given
    const beforeAddIndex = component.counters.length
    // when
    component.OnAdd()
    const afterAddIndex = component.counters.length
    // then
    expect(beforeAddIndex + 1).toEqual(afterAddIndex)
  })

  it('should reset all counters when call OnResetAll', () => 
  {
    // given and when
    component.OnResetAll()
    // then
    expect(component.sum.valueOf()).toEqual(0)
  })

  it('should remove one counter when call OnRemoveOne', () => 
  {
    // given
    const removeIndex = 1
    const LengthBeforeRemoveOne = component.counters.length
    // when
    component.OnRemoveOne(removeIndex)
    const LengthAfterRemoveOne = component.counters.length
    //
    expect(LengthBeforeRemoveOne-1).toEqual(LengthAfterRemoveOne)
  })
});
