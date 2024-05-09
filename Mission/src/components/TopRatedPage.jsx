import React, { useEffect, useState } from 'react';
import { fetchTopRatedMovies } from '../api';
import Movie from './Movie';

const TopRatedPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      const fetchedMovies = await fetchTopRatedMovies();
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

export default TopRatedPage;
