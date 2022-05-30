import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';
import getNavigation, { NavLink } from './links.util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('drop', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate('0.2s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.2s', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  watchlistAmount: number | undefined;
  imageUrl: string | undefined;
  links: NavLink[];
  mobileNavOpened: boolean = false;
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

  openMobileNav() {
    this.mobileNavOpened = true;
  }

  closeMobileNav() {
    this.mobileNavOpened = false;
  }
}
