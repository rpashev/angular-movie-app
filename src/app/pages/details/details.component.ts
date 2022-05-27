import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from 'src/app/models/details-movie.model';
import { ApiService } from 'src/app/services/api.service';
import { OmdbService } from 'src/app/services/omdb.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id: string;
  error: string | null = null;
  loading = false;
  movie: MovieDetails;
  errorOperation: string | null;
  constructor(
    private omdb: OmdbService,
    private route: ActivatedRoute,
    private api: ApiService,
    private store: StoreService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['movieId'];
    });
    this.loadMovie();
  }

  loadMovie() {
    this.error = null;
    this.loading = true;

    this.omdb.getMovie(this.id).subscribe({
      next: (movie) => {
        this.movie = movie;
        this.loading = false;
        console.log(movie);
      },
      error: () => {
        this.error = 'Could not load movie';
        this.loading = false;
      },
    });
  }

  onAddToList(list: 'watchlist' | 'seenlist') {
    this.errorOperation = null;
    this.api.addToList(list, this.id).subscribe({
      next: (data) => {
        console.log(data);
        this.store.addToList(list, this.id);
        list === 'watchlist'
          ? (this.movie.checker.isInWatchlist = true)
          : (this.movie.checker.isInSeenlist = true);
      },
      error: (error) =>
        (this.errorOperation = error.error?.message || 'Could not add to list!'),
    });
  }

  onRemoveFromList(list: 'watchlist' | 'seenlist') {
    this.errorOperation = null;
    this.api.removeFromList(list, this.id).subscribe({
      next: () => {
        this.store.removeFromList(list, this.id);
        list === 'watchlist'
          ? (this.movie.checker.isInWatchlist = false)
          : (this.movie.checker.isInSeenlist = false);
      },
      error: (error) =>
        (this.errorOperation = error.error?.message || 'Could not remove from list!'),
    });
  }
}
