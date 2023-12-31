import { Injectable } from '@angular/core';
import { House } from '../models/house';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeHousingService {
  houses: House[] = [
    {
      "id": 1,
      "name": "Belle maison",
      "city": "Lens",
      "photo": "https://raw.githubusercontent.com/matthieumota/angular-avance/main/src/assets/filtergrade-4T4AcGJvARQ-unsplash.jpg",
      "rooms": 5,
      "wifi": false,
      "price": 300000,
      "rental": 700
    },
    {
      "id": 2,
      "name": "Maison avec piscine",
      "city": "Hulluch",
      "photo": "https://raw.githubusercontent.com/matthieumota/angular-avance/main/src/assets/frames-for-your-heart-2d4lAQAlbDA-unsplash.jpg",
      "rooms": 6,
      "wifi": true,
      "price": 400000,
      "rental": 900
    },
    {
      "id": 3,
      "name": "Maison de ville",
      "city": "Wingles",
      "photo": "https://raw.githubusercontent.com/matthieumota/angular-avance/main/src/assets/jamie-street-h6mj_9bCvBk-unsplash.jpg",
      "rooms": 3,
      "wifi": false,
      "price": 250000,
      "rental": 400
    },
    {
      "id": 4,
      "name": "Maison ranch",
      "city": "Liévin",
      "photo": "https://raw.githubusercontent.com/matthieumota/angular-avance/main/src/assets/jessica-furtney-YOoucEImrKw-unsplash.jpg",
      "rooms": 5,
      "wifi": true,
      "price": 400000,
      "rental": 400
    },
    {
      "id": 5,
      "name": "Belle maison",
      "city": "Lens",
      "photo": "https://raw.githubusercontent.com/matthieumota/angular-avance/main/src/assets/lindsay-VF-c90uyQqk-unsplash.jpg",
      "rooms": 7,
      "wifi": false,
      "price": 500000,
      "rental": 900
    },
    {
      "id": 6,
      "name": "Maison d'amis",
      "city": "Avion",
      "photo": "https://raw.githubusercontent.com/matthieumota/angular-avance/main/src/assets/r-architecture-GGupkreKwxA-unsplash.jpg",
      "rooms": 5,
      "wifi": true,
      "price": 900000,
      "rental": 1200
    },
    {
      "id": 7,
      "name": "Maison d'hiver",
      "city": "Pôle Nord",
      "photo": "https://raw.githubusercontent.com/matthieumota/angular-avance/main/src/assets/stephan-bechert-yFV39g6AZ5o-unsplash.jpg",
      "rooms": 8,
      "wifi": false,
      "price": 600000,
      "rental": 500
    },
    {
      "id": 8,
      "name": "Maison de vacances",
      "city": "Zadar",
      "photo": "https://raw.githubusercontent.com/matthieumota/angular-avance/main/src/assets/vita-vilcina-KtOid0FLjqU-unsplash.jpg",
      "rooms": 6,
      "wifi": true,
      "price": 750000,
      "rental": 900
    },
    {
      "id": 9,
      "name": "Maison simple",
      "city": "Lens",
      "photo": "https://raw.githubusercontent.com/matthieumota/angular-avance/main/src/assets/zac-gudakov-wwqZ8CM21gg-unsplash.jpg",
      "rooms": 3,
      "wifi": false,
      "price": 200000,
      "rental": 400
    }
  ];

  all(): Observable<House[]> {
    return of(this.houses);
  }

  find(id: number): Observable<House | undefined> {
    return of(this.houses.find(h => h.id === id));
  }
}
