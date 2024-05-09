import React, { useEffect, useState } from 'react';
import { fetchUpcomingMovies } from '../api';
import Movie from './Movie';

const UpComing = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const fetchedMovies = await fetchUpcomingMovies();
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

export default UpComing;
