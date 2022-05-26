import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from 'src/app/models/details-movie.model';
import { OmdbService } from 'src/app/services/omdb.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id: string;
  error: string | null = null;
  loading = false;
  movie: MovieDetails | undefined;
  constructor(private omdb: OmdbService, private route: ActivatedRoute) {}

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
      },
      error: () => {
        this.error = 'Could not load movie';
        this.loading = false;
      },
    });
  }
}
