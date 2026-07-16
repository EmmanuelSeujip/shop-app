import { Component, inject } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  favoritesService = inject(FavoritesService);

  toggleMenu() {
    const nav = document.querySelector('header nav');
    nav?.classList.toggle('active');
  }
}
