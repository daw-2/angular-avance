import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.page';
import { HousesPage } from './pages/houses/houses.page';
import { HttpClientModule } from '@angular/common/http';
import { HouseCardComponent } from './components/house-card/house-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    HousesPage,
    HouseCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
