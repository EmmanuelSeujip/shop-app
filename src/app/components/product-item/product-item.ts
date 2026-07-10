import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  @Input() product!: Product;
  @Output() productClicked = new EventEmitter<Product>();
  onProductClick() {     
    this.productClicked.emit(this.product);   
  } 
  clicked = output<void>();
  onFavoriteClick() {
    this.clicked.emit();
  }
}
