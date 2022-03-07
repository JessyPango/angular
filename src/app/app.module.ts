import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {Bonjour} from "./bonjour.component";
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    Bonjour,
    ContactComponent,
    AboutComponent
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
