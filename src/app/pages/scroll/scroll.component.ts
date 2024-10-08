import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { Product } from '@models/product.model';

@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [NavbarComponent, HttpClientModule, CommonModule, ScrollingModule],
  templateUrl: './scroll.component.html',
})
export class ScrollComponent implements OnInit {
  products: Product[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.products = data;
      });
  }
}
