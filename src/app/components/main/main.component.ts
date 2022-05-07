import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {}
  @Input() s1: number;
  @Input() s2: number;
  @Input() s3: number;
  @Output() result = new EventEmitter();
  type = 'Equilateral';

  ngOnInit(): void {}
  DoMath() {
    this.s1 = parseFloat(globalThis.side1.value);
    this.s2 = parseFloat(globalThis.side2.value);
    this.s3 =  parseFloat(globalThis.side3.value);


    console.log(this.s1, this.s2, this.s3);
    if (
      this.s1 + this.s2 <= this.s3 ||
      this.s2 + this.s3 <= this.s1 ||
      this.s1 + this.s3 <= this.s2 ||
      this.s1==0|| this.s2==0|| this.s3==0
    ) {
      this.type = 'Not';
    } else {
      if (this.s1 == this.s2 && this.s2 == this.s3) {
        this.type = 'Equilateral';
      }
      else if (this.s1 == this.s2 || this.s1 == this.s3 || this.s2 == this.s3) {
        this.type = 'Isosceles';
      }else {
        this.type = 'Scalene';
      }
      
    }
   
  }
}
