import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {Bonjour} from "./bonjour.component";
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProduitComponent } from './produit/produit.component';
import { LivreComponent } from './livre/livre.component';
import { RetourLivreComponent } from './retour-livre/retour-livre.component';
import {HttpClientModule} from "@angular/common/http";
import { LanguageTranslatorComponent } from './language-translator/language-translator.component';
import {MeteoComponent} from "./meteo/meteo.component";

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
    RetourLivreComponent,
    LanguageTranslatorComponent,
    MeteoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, // CLI adds AppRoutingModule to the AppModule's imports array
    HttpClientModule, // Pour la consommation des services
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

