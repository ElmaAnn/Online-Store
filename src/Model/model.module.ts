import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './../app/store/cart.model';
import { NgModule } from '@angular/core';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from './rest.datasource';

@NgModule({
  imports: [HttpClientModule],
  providers: [
    ProductRepository,
    Cart,
    Order,
    OrderRepository,
    { provide: StaticDataSource, useClass: RestDataSource },
    RestDataSource,
    AuthService,
  ],
})
export class ModelModule {}
