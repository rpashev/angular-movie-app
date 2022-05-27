export interface BaseMovie {
  title: string;
  poster: string;
  id: string;
  checker: { isInWatchlist: boolean | undefined; isInSeenlist: boolean | undefined };
}
