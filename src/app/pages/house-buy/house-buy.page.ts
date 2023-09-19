import { Component } from '@angular/core';
import { House } from 'src/app/models/house';
import { CurrentHouseService } from 'src/app/services/current-house.service';

@Component({
  selector: 'app-house-buy',
  templateUrl: './house-buy.page.html',
  styleUrls: ['./house-buy.page.css']
})
export class HouseBuyPage {
  house!: House | null;

  constructor(public currentHouse: CurrentHouseService) { }

  ngOnInit() {
    this.currentHouse.house.subscribe(house => this.house = house);
  }
}
