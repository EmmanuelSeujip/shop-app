import { Component } from '@angular/core';
import { Container } from "../../components/container/container";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-home',
  imports: [Container, Header, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
