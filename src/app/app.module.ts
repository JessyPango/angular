import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {Bonjour} from "./bonjour.component";
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProduitComponent } from './produit/produit.component';
import { LivreComponent } from './livre/livre.component';
import { RetourLivreComponent } from './retour-livre/retour-livre.component';

@NgModule({
  declarations: [
    AppComponent,
    Bonjour,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    SigninComponent,
    NotFoundComponent,
    ProduitComponent,
    LivreComponent,
    RetourLivreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule // CLI adds AppRoutingModule to the AppModule's imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
