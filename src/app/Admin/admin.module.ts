import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AdminComponent } from './admin.component';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { OrderTableComponent } from './order-table/order-table.component';
import { ProductTableComponent } from './productTable.component';
import { ProductEditorComponent } from './ProductEditor.component';

// const routing = RouterModule.forChild([
//   { path: 'auth', component: AuthComponent },
//   { path: 'main', component: AdminComponent, canActivate: [AuthGuard] },

//   { path: '**', redirectTo: 'auth' },
// ]);

const routing = RouterModule.forChild([
  { path: 'auth', component: AuthComponent },
  {
    path: 'main',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'products/:mode/:id', component: ProductEditorComponent },
      { path: 'products/:mode', component: ProductEditorComponent },
      { path: 'products/', component: ProductTableComponent },
      { path: 'orders', component: OrderTableComponent },
      { path: '**', redirectTo: 'products' },
    ],
  },
  { path: '**', redirectTo: 'auth' },
]);

@NgModule({
  declarations: [
    AuthComponent,
    AdminComponent,
    OrderTableComponent,
    ProductEditorComponent,
    ProductTableComponent,
  ],
  imports: [FormsModule, CommonModule, routing],
  providers: [AuthGuard],
})
export class AdminModule {}
