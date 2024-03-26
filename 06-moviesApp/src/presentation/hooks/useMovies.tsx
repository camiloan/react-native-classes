import {useEffect, useState} from 'react';
import {Movie} from '../../core/entities/movie.entity';

import * as UseCases from '../../core/use-cases';
import {movieDBFetcher} from '../../config/adapters/movieDB.adapter';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [pupular, setPopular] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const [nowPlayingMovies, UpcomingMovies, TopRatedMovies, PopularMovies] =
      await Promise.all([
        UseCases.moviesNowPlayingUseCase(movieDBFetcher),
        UseCases.moviesUpcomingUseCase(movieDBFetcher),
        UseCases.moviesTopRatedUseCase(movieDBFetcher),
        UseCases.moviesPopularUseCase(movieDBFetcher),
      ]);
    setNowPlaying(nowPlayingMovies);
    setUpcoming(UpcomingMovies);
    setTopRated(TopRatedMovies);
    setPopular(PopularMovies);
    setIsLoading(false);
  };

  return {
    isLoading,
    nowPlaying,
    upcoming,
    topRated,
    pupular,
  };
};
