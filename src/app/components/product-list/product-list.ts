import { Component } from '@angular/core';
import { ProductItem } from "../product-item/product-item";
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-list',
  imports: [ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  listProduct: Product[] = [
    {
      id: 1,
      name: 'Casque Audio Premium',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
    },
    {
      id: 2,
      name: 'Montre Connectée',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80',
    },
    {
      id: 3,
      name: 'Sac à Dos Urban',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80',
    },
    {
      id: 4,
      name: 'Sneakers Sport',
      price: 120.00,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
    },
    {
      id: 5,
      name: 'Lunettes de Soleil',
      price: 35.00,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80',
    },
    {
      id: 6,
      name: 'Appareil Photo',
      price: 349.99,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80',
    },
    {
      id: 7,
      name: 'Bouteille Isotherme',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80',
    },
    {
      id: 8,
      name: 'Clavier Mécanique',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80',
    },
  ];
}
