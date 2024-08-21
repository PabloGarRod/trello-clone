import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from '@models/product.model';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CdkTableModule, NavbarComponent, HttpClientModule, CommonModule],
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  products: Product[] = [];

  columns: string[] = ['id', 'name', 'price', 'img'];

  total = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe((data) => {
        this.products = data;
        this.total = this.products
          .map((item) => item.price)
          .reduce((price, total) => {
            return price + total;
          }, 0);
      });
  }
}
