export interface MovieDetails {
  poster: string;
  year: string;
  title: string;
  genre: string;
  runtime: string;
  actors: string;
  plot: string;
  boxOffice: string;
  director: string;
  ratings: { imdb: string; rotten: string };
  country: string;
  writer: string;
  imdbLink: string;
  checker: { isInWatchlist: boolean | undefined; isInSeenlist: boolean | undefined };
}
