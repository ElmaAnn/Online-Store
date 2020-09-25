import { Component, OnInit } from '@angular/core';
import { OrderRepository } from 'src/Model/order.repository';
import { Order } from 'src/Model/order.model';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
})
export class OrderTableComponent implements OnInit {
  includeShipped: boolean = false;
  constructor(private repository: OrderRepository) {}

  ngOnInit(): void {}

  // Get orders
  getOrders(): Order[] {
    return this.repository
      .getOrders()
      .filter((order) => this.includeShipped || !order.shipped);
  }

  //Mark shipped
  markShipped(order: Order) {
    order.shipped = true;
    this.repository.updateOrder(order);
  }

  deleteOrder(id: number) {
    this.repository.deleteOrder(id);
  }
}
