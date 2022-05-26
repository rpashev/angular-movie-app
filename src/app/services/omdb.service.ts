import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OmdbService {
  baseUrl = `http://www.omdbapi.com/?apikey=${environment.omdbKey}`;

  constructor(private http: HttpClient) {}

  getMovies(query: string): Observable<any> {
    const url = `${this.baseUrl}&s=${query}`;
    return this.http.get<[]>(url);
  }

  getMovie(id: string): Observable<any> {
    const url = `${this.baseUrl}&i=${id}`;
    return this.http.get(url).pipe(
      map((movie: any) => {
        return {
          poster: movie.Poster,
          year: movie.Year,
          title: movie.Title,
          genre: movie.Genre,
          runtime: movie.Runtime,
          actors: movie.Actors,
          plot: movie.Plot,
          boxOffice: movie.BoxOffice,
          director: movie.Director,
          ratings: { imdb: movie.Ratings[0].Value, rotten: movie.Ratings[1].Value },
          country: movie.Country,
          writer: movie.Writer,
          imdbLink: `https://www.imdb.com/title/${movie.imdbID}`,
        };
      })
    );
  }
}
