import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SigninComponent } from './signin/signin.component';
import { ProduitComponent } from './produit/produit.component';
import { RetourLivreComponent } from './retour-livre/retour-livre.component';
import { LivreComponent } from './livre/livre.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'produit', component: ProduitComponent },
  { path: 'livres', component: LivreComponent},
  { path: 'livre/:id', component: RetourLivreComponent},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
