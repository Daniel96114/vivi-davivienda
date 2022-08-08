import { Component, Input, OnInit } from '@angular/core';

export interface ProductsList {
  name: string;
  number: string;
  amount: string;
  info: string;
  id: number
}

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() optionProduct!: ProductsList;


}
