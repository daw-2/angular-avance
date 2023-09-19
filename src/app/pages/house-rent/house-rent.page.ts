import { Component } from '@angular/core';
import { House } from 'src/app/models/house';
import { CurrentHouseService } from 'src/app/services/current-house.service';

@Component({
  selector: 'app-house-rent',
  templateUrl: './house-rent.page.html',
  styleUrls: ['./house-rent.page.css']
})
export class HouseRentPage {
  house!: House | null;

  constructor(private currentHouse: CurrentHouseService) { }

  ngOnInit() {
    this.currentHouse.house.subscribe(house => this.house = house);
  }
}
