import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.page';
import { HousesPage } from './pages/houses/houses.page';
import { SharedModule } from './modules/shared/shared.module';

// Permet d'importer la langue FR dans l'application
import localeFR from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
import { HousePage } from './pages/house/house.page';
import { HouseBuyPage } from './pages/house-buy/house-buy.page';
import { HouseRentPage } from './pages/house-rent/house-rent.page';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './stores/cart.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    HousesPage,
    HousePage,
    HouseBuyPage,
    HouseRentPage,
    // HouseCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // HttpClientModule,
    SharedModule,
    StoreModule.forRoot({ cart: cartReducer }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    // On peut surcharger les "tokens" d'Angular,
    // ce sont des services "simples"
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
