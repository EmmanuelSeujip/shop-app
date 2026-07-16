import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Product } from '../../models/product';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  @Input() product!: Product;
  @Output() productClicked = new EventEmitter<Product>();
  favoritesService = inject(FavoritesService);

  onProductClick() {
    this.productClicked.emit(this.product);
  }

  onFavoriteClick() {
    this.favoritesService.toggle(this.product.id);
  }
}
