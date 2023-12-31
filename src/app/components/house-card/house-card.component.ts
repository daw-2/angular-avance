import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { House } from 'src/app/models/house';
import { AppState, add, has, remove } from 'src/app/stores/cart.reducer';

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // Limite le détection de changement...
})
export class HouseCardComponent {
  @Input() house!: House;
  isInCart!: Observable<boolean>;
  alert: string = '';

  constructor(
    private store: Store<AppState>,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.isInCart = this.store.select(has(this.house.id));
  }

  rent(): void {
    this.store.dispatch(add({ house: this.house, mode: 'rent' }));
    this.alert = 'Merci pour la location';
    setTimeout(() => {
      this.alert = '';
      this.changeDetector.markForCheck(); // Trigger la change detection
    }, 3000);
  }

  buy(): void {
    this.store.dispatch(add({ house: this.house, mode: 'buy' }));
    this.alert = `Merci pour l'achat`;
    setTimeout(() => {
      this.alert = '';
      this.changeDetector.markForCheck();
    }, 3000);
  }

  remove(): void {
    this.store.dispatch(remove({ id: this.house.id }));
  }

  // Fonction abusée pour pouvoir tester la différence
  // sur le changeDetection avec un calcul de Fibonacci
  // entre 20 et 30.
  random() {
    return this.fibonacci(
      Math.floor(Math.random() * (30 - 20 + 1) + 20)
    );
  }

  fibonacci(i: number): number {
    if (i < 2) {
      return i;
    }

    return this.fibonacci(i - 1) + this.fibonacci(i - 2);
  }

  // Permet de voir quand on est dans la zone Angular
  // ou quand il y a un changeDetection de fait que ça
  // console.log
  ngDoCheck() {
    // console.log('OK');
  }

  tax(price: number, rate: number = 20): number {
    console.log('METHOD');
    return price * (1 + rate / 100);
  }
}
