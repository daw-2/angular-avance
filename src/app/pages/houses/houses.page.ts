import { Component, NgZone, SkipSelf } from '@angular/core';
import { House } from 'src/app/models/house';
import { FakeHousingService } from 'src/app/services/fake-housing.service';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.page.html',
  styleUrls: ['./houses.page.css'],
  providers: [
    // { provide: HousingService, useValue: new FakeHousingService() }
    { provide: HousingService, useExisting: FakeHousingService }
  ],
})
export class HousesPage {
  houses!: House[];

  // SkipSelf ne prend pas en compte le providers
  constructor(
    @SkipSelf() private houseService: HousingService,
    private zone: NgZone
  ) {}

  ngOnInit() {
    this.houseService.all().subscribe(
      houses => this.houses = houses
    );

    // Le code hors de la zone d'Angular ne produira pas de détection de changements
    // dans le code
    this.zone.runOutsideAngular(() => {
      setInterval(() => console.log('Hello'), 1000);

      window.addEventListener('scroll', (event) => {
        if (window.scrollY + window.innerHeight > document.body.scrollHeight) {
          console.log('EN BAS DE LA PAGE');
        }
      });
    });
  }
}
