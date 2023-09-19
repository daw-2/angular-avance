import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { House } from 'src/app/models/house';
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
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params) => this.houseService.find(params['id'])),
    ).subscribe({
      next: (house) => this.house = house,
      error: () => this.router.navigate(['/annonces'])
    })
  }
}
