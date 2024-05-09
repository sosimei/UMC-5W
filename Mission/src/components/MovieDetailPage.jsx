import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { searchMoviesByTitle, fetchMovieById } from '../api';

const MovieDetailPage = () => {
  const { title } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const searchResults = await searchMoviesByTitle(decodeURIComponent(title));
      if (searchResults.length > 0) {
        const movieDetails = await fetchMovieById(searchResults[0].id);
        setMovie(movieDetails);
      }
    };

    fetchMovieDetails();
  }, [title]);

  return (
    <MovieContainer>
      {movie ? (
        <DetailContainer>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieImage src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`} alt={movie.title} />
          <MovieOverview>{movie.overview}</MovieOverview>
        </DetailContainer>
      ) : (
        <LoadingMessage>Loading...</LoadingMessage>
      )}
    </MovieContainer>
  );
};

export default MovieDetailPage;

// Styled components
const MovieContainer = styled.div`
  background-size: cover;
  color: white;
  padding: 20px;
`;

const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 20px;
`;

const MovieTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const MovieImage = styled.img`
  width: 50%;
  max-width: 600px;
  height: auto;
  border-radius: 8px;
`;

const MovieOverview = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  
`;

const LoadingMessage = styled.p`
  font-size: 1.5rem;
`;
