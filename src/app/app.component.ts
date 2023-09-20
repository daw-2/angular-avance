import { Component, inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Immobiliare';
  // authService = inject(AuthService);
  cart!: Object[];

  constructor(
    public authService: AuthService,
    private store: Store<{ cart: Object[] }>
  ) {
    store.select('cart').subscribe(cart => this.cart = cart);
  }
}
