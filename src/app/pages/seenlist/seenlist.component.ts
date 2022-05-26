import { Component, OnInit } from '@angular/core';
import { WatchedMovie } from 'src/app/models/watched-movie.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-seenlist',
  templateUrl: './seenlist.component.html',
  styleUrls: ['./seenlist.component.scss'],
})
export class SeenlistComponent implements OnInit {
  movies: WatchedMovie[] = [];
  loading = false;
  error: string | null = null;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.loading = true;
    this.error = null;
    this.api.getSeenlist().subscribe({
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
}
