import { Component, OnInit } from '@angular/core';
import { WatchlistMovie } from 'src/app/models/watchlist-movie.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.scss'],
})
export class WatchlistComponent implements OnInit {
  movies: WatchlistMovie[] = [];
  loading = false;
  error: string | null = null;
  query: string = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.loading = true;
    this.error = null;
    this.api.getWatchlist().subscribe({
      next: (movies) => {
        this.movies = movies;
        this.loading = false;
      },
      error: (error) => {
        this.error = error.error?.message || 'Could not load watched movies!';
        this.loading = false;
      },
    });
  }

  saveQuery(str: string) {
    this.query = str;
  }
}
