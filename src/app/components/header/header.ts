import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

    toggleMenu() {
        const nav = document.querySelector('header nav');
        nav?.classList.toggle('active');
    }
}
