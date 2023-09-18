import { Component, SkipSelf } from '@angular/core';
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
  constructor(@SkipSelf() private houseService: HousingService) {}

  ngOnInit() {
    this.houseService.all().subscribe(
      houses => this.houses = houses
    );
  }
}
