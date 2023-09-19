import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { HousesPage } from './pages/houses/houses.page';

const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'annonces', component: HousesPage },
  { path: 'panier', loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
