import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserData } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  user$ = new BehaviorSubject<UserData | null>(null);
  constructor() {}

  setUser(data: UserData) {
    this.user$.next(data);
    localStorage.setItem('user', JSON.stringify(data));
  }

  logout() {
    this.user$.next(null);
    localStorage.removeItem('user');
  }

  updateLocalStorage() {
    localStorage.setItem('user', JSON.stringify(this.user$.value));
  }

  updateImage(image: string) {
    const data = { ...this.user$.value, image: image };
    this.setUser(data);
  }

  autoLogin() {
    const user = localStorage.getItem('user');
    if (user) {
      this.user$.next(JSON.parse(user));
    }
  }
}
