import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductRepository } from './../../Model/product.repository';
import { Product } from '../../Model/product.model';

@Component({
  templateUrl: 'ProductEditor.component.html',
})
export class ProductEditorComponent implements OnInit {
  editing: boolean = false;
  product: Product = new Product();
  constructor(
    private router: Router,
    private repository: ProductRepository,
    private activateRoute: ActivatedRoute
  ) {
    this.editing = activateRoute.snapshot.params['mode'] == 'edit';
    if (this.editing) {
      Object.assign(
        this.product,
        repository.getProduct(activateRoute.snapshot.params['id'])
      );
    }
  }

  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('admin/main/products');
  }

  ngOnInit(): void {}
}
