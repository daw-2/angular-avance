import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { House } from 'src/app/models/house';
import { CurrentHouseService } from 'src/app/services/current-house.service';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.page.html',
  styleUrls: ['./house.page.css']
})
export class HousePage implements OnInit {
  house!: House;

  constructor(
    private houseService: HousingService,
    private route: ActivatedRoute,
    private router: Router,
    private currentHouse: CurrentHouseService
  ) {}

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params) => this.houseService.find(params['id'])),
    ).subscribe({
      next: (house) => {
        this.house = house;
        this.currentHouse.house.next(house); // Partage l'annonce avec les autres pages
      },
      error: () => this.router.navigate(['/annonces'])
    })
  }
}
