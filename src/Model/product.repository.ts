import { Product } from './product.model';
import { from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
//import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class ProductRepository {
  products: Product[] = [];
  categories: string[] = [];

  constructor(private datasource: RestDataSource) {
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

  saveProduct(product: Product) {
    if (product.id == null || product.id == 0) {
      this.datasource
        .saveProduct(product)
        .subscribe((p) => this.products.push(p));
    } else {
      this.datasource.updateProduct(product).subscribe((p) => {
        this.products.splice(
          this.products.findIndex((p) => p.id == product.id),
          1,
          product
        );
      });
    }
  }
  deleteProduct(id: number) {
    this.datasource.deleteProduct(id).subscribe((p) => {
      this.products.splice(
        this.products.findIndex((p) => p.id == id),
        1
      );
    });
  }
}
