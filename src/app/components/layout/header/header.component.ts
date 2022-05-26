import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';
import getNavigation, { NavLink } from './links.util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  watchlistAmount: number | undefined;
  imageUrl: string | undefined;
  links: NavLink[];
  subscription: Subscription;

  constructor(private store: StoreService, private router: Router) {}

  ngOnInit(): void {
    this.subscription = this.store.user$.subscribe((user) => {
      this.isLoggedIn = user ? true : false;
      this.links = getNavigation(this.isLoggedIn);
      this.imageUrl = this.store?.user$?.value?.image;
      this.watchlistAmount = this.store?.user$?.value?.watchlist?.length;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  logout() {
    this.store.logout();
    this.router.navigate(['login']);
  }
}
