import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MasterComponent } from './master/master.component';
import { ProductsComponent } from './products/products.component';
import { ContentComponent } from './content/content.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartlistComponent } from './cartlist/cartlist.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderComponent } from './order/order.component';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MasterComponent,
    ProductsComponent,
    ContentComponent,
    AboutComponent,
    SignupComponent,
    LoginComponent,
    ContactComponent,
    CheckoutComponent,
    CartlistComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
