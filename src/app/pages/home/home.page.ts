import { Component } from '@angular/core';
import { map } from 'rxjs';
import { House } from 'src/app/models/house';
import { FakeHousingService } from 'src/app/services/fake-housing.service';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
  providers: [
    // { provide: HousingService, useValue: new FakeHousingService() }
    { provide: HousingService, useExisting: FakeHousingService }
  ],
})
export class HomePage {
  houses!: House[];

  constructor(private houseService: HousingService) {}

  ngOnInit() {
    this.houseService.all()
      .pipe(
        map((houses) => houses.sort(() => Math.random() - 0.5).slice(0, 4))
      ).subscribe(
        houses => this.houses = houses
      );
  }
}
