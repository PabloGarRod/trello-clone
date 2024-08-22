import { DataSource } from '@angular/cdk/collections';
import { Product } from '@models/product.model';
import { BehaviorSubject, Observable } from 'rxjs';

export class DataSourceProduct extends DataSource<Product> {
  data = new BehaviorSubject<Product[]>([]);
  originalData: Product[] = [];

  connect(): Observable<Product[]> {
    return this.data;
  }

  init(products: Product[]) {
    this.data.next(products);
    this.originalData = products;
  }

  getTotal() {
    const products = this.data.getValue();

    return products
      .map((item) => item.price)
      .reduce((price, total) => {
        return price + total;
      }, 0);
  }

  update(id: Product['id'], changes: Partial<Product>) {
    const products = this.data.getValue();
    const productIndex = products.findIndex((item) => item.id === id);
    if (productIndex !== -1) {
      products[productIndex] = {
        ...products[productIndex],
        ...changes,
      };
      this.data.next(products);
    }
  }

  findId(query: string) {
    if (query === '') {
      this.data.next(this.originalData);
    } else {
      const newProducts = this.originalData.filter(
        (item) => item.id.toString() === query
      );
      this.data.next(newProducts);
    }
  }

  findTitle(query: string) {
    this.data.next(this.originalData);
    const newProducts = this.originalData.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    this.data.next(newProducts);
  }

  findPrice(query: string) {
    const newProducts = this.originalData.filter(
      (item) => item.price.toString() === query
    );
    this.data.next(newProducts);
  }

  disconnect() {}
}
