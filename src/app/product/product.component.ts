import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() name: string = ""; 
  @Input() description: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
