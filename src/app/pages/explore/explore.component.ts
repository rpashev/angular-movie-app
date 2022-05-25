import { Component, OnInit } from '@angular/core';
import { BaseMovie } from 'src/app/models/base-movie.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss'],
})
export class ExploreComponent implements OnInit {
  movies: BaseMovie[] = [];
  loading = false;
  error: string | null = null;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.loading = true;
    this.error = null;
    this.api.getPublicMovies().subscribe(
      (data) => {
        this.movies = data;
        this.loading = false;
      },
      (error) => {
        this.error = error.error?.message || 'Could not load movies!';
        this.loading = false;
      }
    );
  }
}
