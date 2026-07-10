import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Container } from "./components/container/container";
import { Footer } from "./components/footer/footer";
import { ProductList } from "./components/product-list/product-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('shop-app');
  countFavorite = signal(0);
  onCountChanged(value: number) {
    this.countFavorite.set(value);
    console.log("Add favorite")
  }

}
