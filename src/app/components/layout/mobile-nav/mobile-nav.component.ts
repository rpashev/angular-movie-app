import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';
import { NavLink } from '../header/links.util';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.scss'],
})
export class MobileNavComponent implements OnInit {
  @Input() links: NavLink[];
  @Input() isLoggedIn: boolean;
  @Input() watchlistAmount: number | undefined;
  @Output() close = new EventEmitter();
  constructor(private store: StoreService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.store.logout();
    this.onClose();
    this.router.navigate(['login']);
  }

  onClose() {
    this.close.emit();
  }
}
