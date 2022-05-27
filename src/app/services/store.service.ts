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

  autoLogin() {
    const user = localStorage.getItem('user');
    if (user) {
      this.user$.next(JSON.parse(user));
    }
  }

  updateLocalStorage() {
    localStorage.setItem('user', JSON.stringify(this.user$.value));
  }

  updateImage(image: string) {
    const data = { ...this.user$.value, image: image };
    this.setUser(data);
  }

  listChecker(id: string) {
    const watchlist = this.user$.value?.watchlist;
    const seenlist = this.user$.value?.seenlist;
    let isInWatchlist = watchlist?.includes(id);
    let isInSeenlist = seenlist?.includes(id);
    return { isInSeenlist, isInWatchlist };
  }

  addToList(list: 'watchlist' | 'seenlist', id: string) {
    const watchlist = this.user$.value?.watchlist;
    const seenlist = this.user$.value?.seenlist;
    if (list === 'watchlist') {
      watchlist?.unshift(id);
    } else {
      seenlist?.unshift(id);
    }
    this.setUser({ ...this.user$.value, watchlist, seenlist });
  }

  removeFromList(list: 'watchlist' | 'seenlist', id: string) {
    let watchlist = this.user$.value?.watchlist;
    let seenlist = this.user$.value?.seenlist;
    if (list === 'watchlist') {
      watchlist = watchlist?.filter((movieId) => movieId !== id);
    } else {
      seenlist = seenlist?.filter((movieId) => movieId !== id);
    }
    this.setUser({ ...this.user$.value, watchlist, seenlist });
  }
}
