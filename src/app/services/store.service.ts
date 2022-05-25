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
  }
}
