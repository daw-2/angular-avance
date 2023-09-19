import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { House } from '../models/house';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  constructor(private http: HttpClient) {}

  all(): Observable<House[]> {
    return this.http.get<House[]>('http://localhost:3000/houses');
  }

  find(id: number): Observable<House> {
    return this.http.get<House>(`http://localhost:3000/houses/${id}`);
  }
}
