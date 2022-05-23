import { Component, OnInit } from '@angular/core';
import getNavigation, { NavLink } from './links.util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  links: NavLink[];

  constructor() {}

  ngOnInit(): void {
    this.links = getNavigation(this.isLoggedIn);
  }
}
