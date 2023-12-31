import axios from 'axios';

//const API_KEY = '265f78c728b685275d7bdd6274612da2';
const BASE_URL = 'https://api.themoviedb.org/3/';
const options = {
  method: 'GET',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTZlYWZhMmEzOTE3ZDU3ZGQzMGRhOTZhOWQxOTg5MCIsInN1YiI6IjY0ODgzZjcyZTI3MjYwMDBjOTMyMjM2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XdPSLtTSAZv4fw0M0gYehYEL9mjnuAiltEwvVoL-DaE',
    accept: 'application/json',
  },
};

export const getTrendMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?language=en-US`,
    options
  );
  return response.data;
};

export const getSearchMovie = async movieName => {
  const response = await axios.get(
    `${BASE_URL}search/movie?query=${movieName}&page=1`,
    options
  );
  return response.data;
};

export const getMovieItem = async movieId => {
  const response = await axios.get(`${BASE_URL}movie/${movieId}`, options);
  return response.data;
};

export const getMovieCastInfo = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/credits`,
    options
  );
  return response.data;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(
    `${BASE_URL}movie/${movieId}/reviews`,
    options
  );
  return response.data;
};
