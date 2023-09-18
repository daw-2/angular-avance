import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { House } from 'src/app/models/house';

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // Limite le détection de changement...
})
export class HouseCardComponent {
  @Input() house!: House;

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
    console.log('OK');
  }
}
