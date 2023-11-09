import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponent } from './counter-group.component';
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

  it("should add counter when call onAdd", () => {
    component.onAdd();
    expect(component.counters.length).toEqual(4)
  });

  it("should remove counter of i when call onRemove", () => {
    component.onRemove(0)
    expect(component.counters[0].num).toEqual(2)
    expect(component.counters[0]).toEqual({ num: 2 })
  });

  it("should reset all number to 0 when call onReset",()=>{
    component.onReset()
    expect(component.sum).toBe(0);
  })
});
