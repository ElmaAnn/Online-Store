import { Product } from './product.model';
import { observable, from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class ProductRepository {
  products: Product[] = [];
  categories: string[] = [];

  constructor(private datasource: StaticDataSource) {
    datasource.getProducts().subscribe((data) => {
      this.products = data;
      this.categories = data
        .map((p) => p.category)
        .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    });
  }
  getProducts(category: string = null) {
    return this.products.filter(
      (p) => category == null || category == p.category
    );
  }

  getProduct(id: number) {
    return this.products.find((p) => p.id == id);
  }
  getCategories(): string[] {
    return this.categories;
  }
}
