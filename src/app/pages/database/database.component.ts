import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, debounceTime, distinctUntilChanged } from 'rxjs';
import { OmdbService } from 'src/app/services/omdb.service';
import { BaseMovie } from '../../models/base-movie.model';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.scss'],
})
export class DatabaseComponent implements OnInit {
  movies: BaseMovie[] | undefined;
  subject = new BehaviorSubject<string>('');
  loading = false;
  error: string | null = null;

  constructor(private omdb: OmdbService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  saveQuery(event: any) {
    this.subject.next(event.target.value);
  }

  getMovies() {
    this.subject.pipe(debounceTime(250), distinctUntilChanged()).subscribe((query) => {
      if (query === '') return;
      this.loading = true;
      this.error = null;

      this.omdb.getMovies(query).subscribe({
        next: (movies) => {
          this.movies = movies;
          this.loading = false;
        },
        error: (error) => {
          this.error = error || 'Please try again';
          this.loading = false;
          this.movies = [];
        },
      });
    });
  }
}
