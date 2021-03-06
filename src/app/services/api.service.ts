import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map, Observable, switchMap, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserData } from '../models/user.model';
import { StoreService } from './store.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseURL = environment.baseURL;

  constructor(private http: HttpClient, private store: StoreService) {}

  login(data: { email: string; password: string }) {
    const url = this.baseURL + 'auth/login';
    return this.http.post<UserData>(url, data).pipe(
      tap((response) => {
        this.store.setUser(response);
      })
    );
  }

  signup(data: {
    username: string;
    email: string;
    password: string;
    repeatPassword: string;
  }) {
    const url = this.baseURL + 'auth/register';
    return this.http.post<UserData>(url, data).pipe(
      tap((response) => {
        this.store.setUser(response);
      })
    );
  }

  updateAvatar(formData: FormData) {
    const url = this.baseURL + 'user-profile';
    return this.http.post(environment.cloudinaryURL, formData).pipe(
      switchMap((response: any) => {
        return this.http.post(url, { image: response.url });
      })
    );
  }

  getPublicMovies() {
    const url = this.baseURL + 'public-library';
    return this.http.get<[]>(url).pipe(
      map((movies) => {
        return movies.map((movie: any) => {
          return {
            poster: movie.poster,
            title: movie.title,
            id: movie.IMDBId,
            checker: this.store.listChecker(movie.IMDBId),
          };
        });
      })
    );
  }

  getSeenlist() {
    const url = this.baseURL + 'user/seenlist';
    return this.http.get<[]>(url).pipe(
      map((movies) => {
        return movies.map((movie: any) => {
          return {
            id: movie.IMDBId,
            poster: movie.poster,
            year: movie.year,
            title: movie.title,
            genre: movie.genre,
            runtime: movie.runtime,
            checker: this.store.listChecker(movie.IMDBId),
          };
        });
      })
    );
  }
  getWatchlist() {
    const url = this.baseURL + 'user/watchlist';
    return this.http.get<[]>(url).pipe(
      map((movies) => {
        return movies.map((movie: any) => {
          return {
            id: movie.IMDBId,
            poster: movie.poster,
            year: movie.year,
            title: movie.title,
            genre: movie.genre,
            runtime: movie.runtime,
            actors: movie.actors,
            plot: movie.plot,
            checker: this.store.listChecker(movie.IMDBId),
          };
        });
      })
    );
  }

  addToList(list: 'watchlist' | 'seenlist', id: string) {
    const url = this.baseURL + 'user/' + list;
    return this.http.post(url, { IMDBId: id });
  }

  removeFromList(list: 'watchlist' | 'seenlist', id: string) {
    const url = `${this.baseURL}user/${list}/${id}`;
    return this.http.delete(url);
  }
}
