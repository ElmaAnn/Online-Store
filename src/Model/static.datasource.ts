import { Product } from './product.model';
import { from, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Order } from './../Model/order.model';

@Injectable()
export class StaticDataSource {
  private products: Product[];
  // = [
  //   new Product(
  //     1,
  //     'Flyraom Lace up Shoe',
  //     'Category-1',
  //     'Sneaker Shoe(Category-1)',
  //     100
  //   ),
  //   new Product(
  //     2,
  //     'T-Shirt',
  //     'Category-1',
  //     'Sports T-Shirt High Quality(Category-1)',
  //     90
  //   ),
  //   new Product(
  //     3,
  //     'TR Trail Shoes',
  //     'Category-1',
  //     'Running Shoes(Category-1)',
  //     99
  //   ),
  //   new Product(
  //     4,
  //     'Cooler',
  //     'Category-1',
  //     'High Quality Cooler(Category-1)',
  //     50
  //   ),
  //   new Product(
  //     5,
  //     'Graphic T-Shirt Grey L',
  //     'Category-1',
  //     'Cotton T-Shirt(Category-1)',
  //     60
  //   ),
  //   new Product(
  //     6,
  //     'Euphoria EDP 100ml',
  //     'Category-2',
  //     'Liquid Amber,Blacl Violet,Cream',
  //     45
  //   ),
  //   new Product(
  //     7,
  //     'Eternity EDP 100ml',
  //     'Category-2',
  //     'Brazilian Rose Wood,Cashmere Wood',
  //     48
  //   ),
  //   new Product(
  //     8,
  //     'In Red EDT 100ml',
  //     'Category-2',
  //     'Lily Jasmine, Violet Leaf,Rose,Black Current',
  //     48
  //   ),
  //   new Product(9, 'Flower Pink EDP 100ml', 'Category-2', 'Othmani Roses', 99),
  //   new Product(10, 'Musk EDC 59ml', 'Category-2', 'Musk EDC 59ml', 88),
  //   new Product(
  //     11,
  //     'Lakme Mascara 59ml',
  //     'Category-3',
  //     'Deep Black Long Lasting',
  //     150
  //   ),
  //   new Product(
  //     12,
  //     'Maybeline Lipbalm 40ml',
  //     'Category-3',
  //     'Fuschia Matte Color',
  //     75
  //   ),
  // ];

  getProducts(): Observable<Product[]> {
    return from([this.products]);
  }

  saveOrder(order: Order) {
    console.log(JSON.stringify(order));
    return from([order]);
  }
}
