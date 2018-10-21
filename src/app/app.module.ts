import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MasterComponent } from './master/master.component';
import { ProductsComponent } from './products/products.component';
import { ListComponent } from './products/list/list.component';
import { ContentComponent } from './content/content.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MasterComponent,
    ProductsComponent,
    ListComponent,
    ContentComponent,
    AboutComponent,
    SignupComponent,
    LoginComponent,
    ContactComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
