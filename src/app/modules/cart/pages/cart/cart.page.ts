import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { House } from 'src/app/models/house';
import { AppState, Mode, selectMode } from 'src/app/stores/cart.reducer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.css']
})
export class CartPage {
  rents: House[] = [];
  choose: Mode = 'rent';

  constructor(private store: Store<AppState>) {
    this.store.select(selectMode(this.choose)).subscribe(items => this.rents = items);
  }
}
