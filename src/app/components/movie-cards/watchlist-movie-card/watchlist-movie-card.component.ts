import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(event: any) {
    if (event.type === 'keypress' && event.keyCode === 13) {
      this.router.navigate([`details/${this.id}`]);
    }
    if (event.type === 'click') this.router.navigate([`details/${this.id}`]);
  }
}
