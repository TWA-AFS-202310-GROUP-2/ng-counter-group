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

  it('should Increase', () => {
    component.Number=5;

    component.onIncrease();
    
    expect(component.Number).toEqual(6);
  });

  it('should Decrease', () => {
    component.Number=5;

    component.onDescrease();

    expect(component.Number).toEqual(4);
  });
});
