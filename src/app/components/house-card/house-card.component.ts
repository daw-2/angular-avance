import { Component, Input } from '@angular/core';
import { House } from 'src/app/models/house';

@Component({
  selector: 'app-house-card',
  templateUrl: './house-card.component.html',
  styleUrls: ['./house-card.component.css']
})
export class HouseCardComponent {
  @Input() house!: House;
}
