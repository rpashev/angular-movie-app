import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-watchlist-movie-card',
  templateUrl: './watchlist-movie-card.component.html',
  styleUrls: ['./watchlist-movie-card.component.scss'],
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
  showActions = false;
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
        this.error = 'Could not add to watched!';
        this.loading = false;
        this.hideNotification();
      },
    });
  }

  onRemoveFromWatchlist(event: any) {
    this.error = null;
    this.loading = true;
    this.success = false;
    this.api.removeFromList('watchlist', this.id).subscribe({
      next: () => {
        this.loading = false;
        this.store.removeFromList('watchlist', this.id);
        this.onDeleted.emit(this.id);
      },
      error: () => {
        this.loading = false;
        this.error = 'Could not remove from list!';
        this.notificationIsVisible = true;
        this.hideNotification();
      },
    });
  }

  hideNotification() {
    setTimeout(() => (this.notificationIsVisible = false), 2000);
  }
}
