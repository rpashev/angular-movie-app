import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-base-movie-card',
  templateUrl: './base-movie-card.component.html',
  styleUrls: ['./base-movie-card.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({
          opacity: 0,
        }),
        animate('0.25s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.25s', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class BaseMovieCardComponent implements OnInit {
  @Input() imgLink: string;
  @Input() title: string;
  @Input() id: string;
  @Input() isInSeenlist: boolean | undefined;
  @Input() isInWatchlist: boolean | undefined;
  showActions = false;
  error: string | null = null;
  loading = false;
  success = false;
  notificationIsVisible = false;

  constructor(
    private router: Router,
    private api: ApiService,
    private store: StoreService
  ) {}

  ngOnInit(): void {}

  navigate(event: any) {
    if (event.type === 'keypress' && event.keyCode === 13) {
      this.router.navigate([`details/${this.id}`]);
    }
    if (event.type === 'click') this.router.navigate([`details/${this.id}`]);
  }

  hideNotification() {
    setTimeout(() => (this.notificationIsVisible = false), 2000);
  }

  onAddToList(list: 'watchlist' | 'seenlist') {
    this.error = null;
    this.loading = true;
    this.success = false;
    this.api.addToList(list, this.id).subscribe({
      next: () => {
        this.store.addToList(list, this.id);

        list === 'watchlist' ? (this.isInWatchlist = true) : (this.isInSeenlist = true);
        this.loading = false;
        this.success = true;
        this.notificationIsVisible = true;
        this.hideNotification();
      },
      error: () => {
        this.loading = false;
        this.error = 'Could not add to list!';
        this.notificationIsVisible = true;
        this.hideNotification();
      },
    });
  }
}
