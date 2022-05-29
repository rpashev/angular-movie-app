import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-watchlist-movie-card',
  templateUrl: './watchlist-movie-card.component.html',
  styleUrls: ['./watchlist-movie-card.component.scss'],
})
export class WatchlistMovieCardComponent implements OnInit {
  @Input() imgLink: string;
  @Input() title: string;
  @Input() year: string;
  @Input() genre: string;
  @Input() id: string;
  @Input() runtime: string;
  @Input() plot: string;
  @Input() actors: string;
  @Input() isInSeenlist: boolean;
  error: string | null = null;
  loading = false;
  success = false;
  notificationIsVisible = false;
  @Output() onDeleted = new EventEmitter();

  constructor(
    private router: Router,
    private store: StoreService,
    private api: ApiService
  ) {}

  ngOnInit(): void {}

  navigate(event: any) {
    if (event.type === 'keypress' && event.keyCode === 13) {
      this.router.navigate([`details/${this.id}`]);
    }
    if (event.type === 'click') this.router.navigate([`details/${this.id}`]);
  }

  onAddToSeenlist(event: any) {
    event.stopPropagation();
    this.error = null;
    this.loading = true;
    this.api.addToList('seenlist', this.id).subscribe({
      next: (data) => {
        console.log(data);
        this.store.addToList('seenlist', this.id);
        this.loading = false;
        this.success = true;
        this.isInSeenlist = true;
        this.notificationIsVisible = true;
        this.hideNotification();
      },
      error: (error) => {
        this.notificationIsVisible = true;
        this.error = error.error?.message || 'Could not add to watched!';
        this.loading = false;
        this.hideNotification();
      },
    });
  }

  onRemoveFromWatchlist(event: any) {
    event.stopPropagation();
    this.error = null;
    this.loading = true;
    this.api.removeFromList('watchlist', this.id).subscribe({
      next: () => {
        this.store.removeFromList('watchlist', this.id);
        this.onDeleted.emit(this.id);
        this.loading = false;
      },
      error: (error) => {
        this.notificationIsVisible = true;
        this.error = error.error?.message || 'Could not remove from list!';
        this.loading = false;
        this.hideNotification();
      },
    });
  }

  hideNotification() {
    setTimeout(() => (this.notificationIsVisible = false), 2000);
  }
}
