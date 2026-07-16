import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favoriteIds = signal<Set<number>>(new Set());

  count = computed(() => this.favoriteIds().size);

  isFavorite(productId: number): boolean {
    return this.favoriteIds().has(productId);
  }

  toggle(productId: number): void {
    this.favoriteIds.update(ids => {
      const newSet = new Set(ids);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  }
}
