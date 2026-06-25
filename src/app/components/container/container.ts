import { Component } from '@angular/core';
import { ProductItem } from "../product-item/product-item";
import { ProductList } from "../product-list/product-list";

@Component({
  selector: 'app-container',
  imports: [ProductItem, ProductList],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {

}
