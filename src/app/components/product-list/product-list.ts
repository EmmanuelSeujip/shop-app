import { Component, Output, EventEmitter, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product';
import { ProductItem } from "../product-item/product-item";
import { ModalProductView } from "../modal-product-view/modal-product-view";

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductItem, ModalProductView],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  @Output() productClicked = new EventEmitter<Product>();
  selectedProduct = signal<Product | null>(null);

  onProductClick(product: Product) {  
    this.productClicked.emit(product); 
    this.selectedProduct.set(product);
  } 

  onCloseModal() {
    this.selectedProduct.set(null);
  }


  listProduct = signal<Product[]>([
    {
      id: 1,
      name: 'Casque Audio Premium',
      description: "Un casque audio de haute qualité avec une excellente autonomie.",
      soldPrice: 25000,
      regularPrice: 35000,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80',
      createdAt: new Date('2026-01-15'),
      categories: ['Électronique', 'Audio'],
      isFavorite:false
    },
    {
      id: 2,
      name: 'Montre Connectée',
      description: "Montre intelligente avec suivi sportif et notifications en temps réel.",
      soldPrice: 35000,
      regularPrice: 45000,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80',
      createdAt: new Date('2026-02-10'),
      categories: ['Électronique', 'Accessoires'],
      isFavorite:false
    },
    {
      id: 3,
      name: 'Sac à Dos Urban',
      description: "Sac à dos résistant, léger et stylé pour un usage quotidien.",
      soldPrice: 12000,
      regularPrice: 15000,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80',
      createdAt: new Date('2026-03-05'),
      categories: ['Mode', 'Accessoires'],
      isFavorite:false
    },
    {
      id: 4,
      name: 'Sneakers Sport',
      description: "Chaussures de sport confortables pour toutes vos activités physiques.",
      soldPrice: 20000,
      regularPrice: 25000,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80',
      createdAt: new Date('2026-04-20'),
      categories: ['Mode', 'Chaussures'],
      isFavorite:false
    },
    {
      id: 5,
      name: 'Lunettes de Soleil',
      description: "Lunettes de soleil tendance offrant une excellente protection UV.",
      soldPrice: 8000,
      regularPrice: 10000,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80',
      createdAt: new Date('2026-05-11'),
      categories: ['Mode', 'Accessoires']
    },
    {
      id: 6,
      name: 'Appareil Photo',
      description: "Appareil photo numérique haute résolution pour capturer des souvenirs parfaits.",
      soldPrice: 220000,
      regularPrice: 250000,
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80',
      createdAt: new Date('2025-11-25'),
      categories: ['Électronique', 'Photographie'],
      isFavorite:false
    },
    {
      id: 7,
      name: 'Bouteille Isotherme',
      description: "Gourde en acier inoxydable pour conserver vos boissons au frais ou au chaud.",
      soldPrice: 6000,
      regularPrice: 8000,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&q=80',
      createdAt: new Date('2026-06-01'),
      categories: ['Maison', 'Accessoires'],
      isFavorite:false
    },
    {
      id: 8,
      name: 'Clavier Mécanique',
      description: "Clavier mécanique rétroéclairé, idéal pour les professionnels et les gamers.",
      soldPrice: 32000,
      regularPrice: 40000,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80',
      createdAt: new Date('2026-01-30'),
      categories: ['Électronique', 'Informatique'],
      isFavorite:false
    }
  ])
}
