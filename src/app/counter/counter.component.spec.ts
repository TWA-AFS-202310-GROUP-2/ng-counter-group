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

  it('should Ondecrese', () => {
    component.number = 1
    component.OnIncrease()
    expect(component.number).toEqual(2)
  });

  it('should Ondecrese', () => {
    component.number = 2
    component.OnDecrease()
    expect(component.number).toEqual(1)
  });
});
