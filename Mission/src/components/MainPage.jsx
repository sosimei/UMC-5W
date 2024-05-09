import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const PageContainer = styled.div`
  background-color: #2C3E50;
  color: white;
  padding: 20px;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Input = styled.input`
  width: 50%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #3498DB;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #2980B9;
  }
`;

const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
`;

const MovieCard = styled.div`
  background-color: #34495E;
  border-radius: 5px;
  padding: 10px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const MovieImage = styled.img`
  width: 100%;
  border-radius: 3px;
`;

const MovieTitle = styled.h3`
  font-size: 16px;
  margin-top: 5px;
`;

const MovieRating = styled.span`
  background-color: #16A085;
  padding: 3px 7px;
  border-radius: 5px;
  font-size: 14px;
`;

function MainPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      const fetchMovies = async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c004e3cbb51120f3feda30eae128a1af&query=${searchTerm}&include_adult=false&language=ko&page=1&region=KR`);
        setMovies(response.data.results);
      };

      fetchMovies();
    }
  }, [searchTerm]);

  return (
    <PageContainer>
      <SearchContainer>
        <Input
          type="text"
          placeholder="Find your movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SearchButton onClick={() => setSearchTerm(searchTerm.trim())}>🔍</SearchButton>
      </SearchContainer>
      <MoviesGrid>
        {movies.map(movie => (
          <MovieCard key={movie.id}>
            <MovieImage src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieRating>{movie.vote_average}</MovieRating>
          </MovieCard>
        ))}
      </MoviesGrid>
    </PageContainer>
  );
}

export default MainPage;
