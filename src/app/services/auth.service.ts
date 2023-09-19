import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  // @todo on pourrait aller chercher un token dans le localstorage

  logged(): Observable<boolean> {
    return this.user.pipe(
      map(user => user !== null)
    );
  }

  login(username: string): void {
    // @todo Post to API server
    this.user.next({ username });
  }

  logout() {
    this.user.next(null);
  }
}
