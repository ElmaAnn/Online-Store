import { Component, OnInit } from '@angular/core';
import { ProductRepository } from './../../Model/product.repository';
import { Product } from '../../Model/product.model';

@Component({
  templateUrl: 'ProductTable.component.html',
})
export class ProductTableComponent implements OnInit {
  constructor(private repository: ProductRepository) {}

  ngOnInit(): void {}

  getProducts(): Product[] {
    return this.repository.getProducts();
  }

  deleteProduct(id: number) {
    this.repository.deleteProduct(id);
  }
}
