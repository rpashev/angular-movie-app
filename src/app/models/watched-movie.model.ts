export interface WatchedMovie {
  title: string;
  poster: string;
  id: string;
  genre: string;
  year: string;
  runtime: string;
  checker: { isInWatchlist: boolean | undefined; isInSeenlist: boolean | undefined };
}
