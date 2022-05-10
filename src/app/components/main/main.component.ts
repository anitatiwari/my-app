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
  unit= "cm"
  displayStyle = "none";
  reason: string="any"

  ngOnInit(): void {}
  DoMath() {
    //getting the user input
    this.s1 = parseFloat(globalThis.side1.value);
    this.s2 = parseFloat(globalThis.side2.value);
    this.s3 =  parseFloat(globalThis.side3.value);

    
 if(globalThis.side1.value == ""||globalThis.side2.value==""||globalThis.side3.value ==""){
        alert ("Please enter number")
 }
  else  if (
    //for triangle types
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
  
    
  
   
   
 
  
//var AB = 40;
// var BC = 50;
// var AC = 30;



// // calculate third point
// C[1] = (AB * AB + AC * AC - BC * BC) / (2 * AB);
// C[0] = Math.sqrt(AC * AC - C[1] * C[1]);
// console.log(A, B, C);

// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');

// ctx.beginPath();
// ctx.moveTo(A[0], A[1]);
// ctx.lineTo(B[0], B[1]);
// ctx.lineTo(C[0], C[1]);
// ctx.fill();

}
