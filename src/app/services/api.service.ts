import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
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
}
