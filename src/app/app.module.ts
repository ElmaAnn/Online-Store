import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import '@angular/compiler';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from './store/store.module';
import { AppRoutingModule } from './app-routing.module';
import { StoreFirstGuard } from './store/storefirst.guard';
import { AdminModule } from './Admin/admin.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule,
    AppRoutingModule,
    AdminModule,
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
