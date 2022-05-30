import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-base-movie-card',
  templateUrl: './base-movie-card.component.html',
  styleUrls: ['./base-movie-card.component.scss'],
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
      error: (error) => {
        this.loading = false;
        this.error = error.error?.message || 'Could not add to list!';
        this.notificationIsVisible = true;
        this.hideNotification;
      },
    });
  }
}
