import { Injectable } from '@angular/core';
import { Product } from './../../Model/product.model';

@Injectable()
export class Cart {
  //Attributes
  public Lines: CartLine[] = [];
  public itemCount: number = 0;
  public cartPrice: number = 0;
  price: number = 0;
  //Methods
  addLine(product: Product, qty: number = 1) {
    let line = this.Lines.find((line) => line.product.id == product.id);
    if (line != undefined) {
      line.qty += qty;
    } else {
      this.Lines.push(new CartLine(product, qty));
    }
    this.reCalculate();
  }

  updateQuantity(product: Product, qty: number) {
    let line = this.Lines.find((line) => line.product.id == product.id);
    if (line != undefined) {
      line.qty = Number(qty);
    }
    this.reCalculate();
  }

  removeLine(id: number) {
    let index = this.Lines.findIndex((line) => line.product.id == id);
    this.Lines.splice(index, 1);
    this.reCalculate();
  }

  clear() {
    this.Lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }
  // Re-calculate method
  //calculate product qty * product price
  //count*price
  //looping
  //product A*20$
  //product B*5$
  //product C*120$ * 3items
  //forEach
  //OOP Encapsulation
  //user 1 have his total cost private
  //user 2 have his total cost private

  private reCalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;
    this.Lines.forEach((line) => {
      this.itemCount += line.qty;
      this.cartPrice += line.qty * line.product.price;
    });
  }
}

export class CartLine {
  constructor(public product: Product, public qty: number) {}

  get lineTotal() {
    return this.qty * this.product.price;
  }
}
