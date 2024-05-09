import React, { useEffect, useState } from 'react';
import { fetchNowPlaying } from '../api';
import Movie from './Movie';

const NowPlayingPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const fetchedMovies = await fetchNowPlaying();
      setMovies(fetchedMovies);
    };

    loadMovies();
  }, []);

  return (
    <div className="app-container">
      {movies.map(movie => (
        <Movie
          title={movie.title}
          poster_path={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
          vote_average={movie.vote_average}
          overview={movie.overview}
        />
      ))}
    </div>
  );
};

export default NowPlayingPage;
