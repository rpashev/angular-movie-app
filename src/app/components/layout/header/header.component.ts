import { Component, OnDestroy, OnInit } from '@angular/core';
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
  links: NavLink[];
  subscription: Subscription;

  constructor(private store: StoreService) {}

  ngOnInit(): void {
    this.subscription = this.store.user$.subscribe((user) => {
      this.isLoggedIn = user ? true : false;
      this.links = getNavigation(this.isLoggedIn);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
