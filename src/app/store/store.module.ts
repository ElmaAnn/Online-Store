import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreComponent } from './store.component';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../../Model/model.module';
import { CartSummaryComponent } from './../cart-summary/cart-summary.component';
import { CartDetailsComponent } from './../cart-details/cart-details.component';
import { CheckOutComponent } from './../check-out/check-out.component';
import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    StoreComponent,
    CartSummaryComponent,
    CartDetailsComponent,
    CheckOutComponent,
  ],
  imports: [BrowserModule, FormsModule, ModelModule, RouterModule],
  exports: [StoreComponent, CartDetailsComponent, CheckOutComponent],
})
export class StoreModule {}
