import { NgModule, inject } from '@angular/core';
import { CanActivateFn, RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { HousesPage } from './pages/houses/houses.page';
import { AuthService } from './services/auth.service';

// Permet de garder la page grâce à notre service qui va annoncer
// si l'utilisateur est connecté ou non
const guard: CanActivateFn = () => inject(AuthService).logged();

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'annonces', component: HousesPage, canActivate: [guard] },
  { path: 'panier', loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
