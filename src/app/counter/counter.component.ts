import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
 Number:number =0;
 public onDescrease()
 {
  this.Number--;
 }
 public onIncrease()
 {
  this.Number++;
 }
}
