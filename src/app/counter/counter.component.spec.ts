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

  it('currentCount should add 1 when incrementCounter is called', () => {
    component.incrementCounter();
    expect(component.currentCount).toEqual(1);
  });

  it('should increase counter when clicking add button', () => {
    const addButton = fixture.nativeElement.querySelector('#add-button');
    addButton.click();
    fixture.detectChanges();
    const value = fixture.debugElement.query(By.css('span')).nativeElement.innerText;
    expect(value).toEqual('number: 1');
  })
});
