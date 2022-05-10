import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
text: string="this.s1"
}

//var AB = 40;
// var BC = 50;
// var AC = 30;

// var A = [0, 0]; // starting coordinates
// var B = [0, AB];
// var C = [];

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
