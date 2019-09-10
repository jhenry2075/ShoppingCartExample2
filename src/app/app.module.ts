import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent} from './product-list/product-list.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { Store } from './services/mock-store.service';

@NgModule({
  declarations: [
    AppComponent, ProductListComponent, CheckoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'checkout', component: CheckoutComponent },
    ])
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
