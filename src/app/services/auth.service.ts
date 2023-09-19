import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  logged(): Observable<boolean> {
    return this.user.pipe(
      map(user => user !== null)
    );
  }

  login(username: string): void {
    this.user.next({ username });
  }

  logout() {
    this.user.next(null);
  }
}
