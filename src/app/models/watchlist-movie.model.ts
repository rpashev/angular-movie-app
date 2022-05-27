export interface WatchlistMovie {
  title: string;
  poster: string;
  id: string;
  genre: string;
  year: string;
  runtime: string;
  plot: string;
  actors: string;
  checker: { isInWatchlist: boolean | undefined; isInSeenlist: boolean | undefined };
}
