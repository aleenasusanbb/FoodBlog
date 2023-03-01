import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { SignupComponent } from './pages/signup/signup.component';
import { RecepiesComponent } from './recepies/recepies.component';
import { VegComponent } from './veg/veg.component';
import { SingleComponent } from './single/single.component';
import { NonVegComponent } from './pages/non-veg/non-veg.component';
import { SnacksComponent } from './pages/snacks/snacks.component';
import { DessertsComponent } from './pages/desserts/desserts.component';
import { SeafoodComponent } from './pages/seafood/seafood.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutusComponent,
    ContactComponent,
    FeedbackComponent,
    SignupComponent,
    RecepiesComponent,
    VegComponent,
    SingleComponent,
    NonVegComponent,
    SnacksComponent,
    DessertsComponent,
    SeafoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
