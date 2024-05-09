import axios from 'axios';

const API_KEY = 'c004e3cbb51120f3feda30eae128a1af';
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdbApi = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'ko',
    page: "1",
    region: "KR"
  }
});

export const fetchNowPlaying = async () => {
  try {
    const response = await tmdbApi.get('/movie/now_playing');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching now playing movies:', error);
    return [];
  }
};

export const fetchPopularMovies = async () => {
  try {
    const response = await tmdbApi.get('/movie/popular');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};

export const fetchTopRatedMovies = async () => {
  try {
    const response = await tmdbApi.get('/movie/top_rated');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching top rated movies:', error);
    return [];
  }
};

export const fetchUpcomingMovies = async () => {
  try {
    const response = await tmdbApi.get('/movie/upcoming');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching top rated movies:', error);
    return [];
  }
};

export const searchMoviesByTitle = async (title) => {
  try {
    const response = await tmdbApi.get('/search/movie', {
      params: { query: title }
    });
    return response.data.results; // 검색 결과 반환
  } catch (error) {
    console.error('Error searching movies by title:', error);
    return [];
  }
};

export const fetchMovieById = async (id) => {
  try {
    const response = await tmdbApi.get(`/movie/${id}`);
    return response.data; // 영화 상세 정보 반환
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
};
