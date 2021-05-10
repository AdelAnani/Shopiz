import axios from 'axios';

const API_KEY = "607f7ae";

const searchMovieByName = (movieName) =>
    axios({
        method: 'GET',
        url: `https://www.omdbapi.com/?apikey=${API_KEY}`,
        params: {
            s: movieName,
            type: 'movie',
            plot: 'full',
            r: 'json',
        },
    });

const searchMovieById = (movieId) =>
    axios({
        method: 'GET',
        url: `https://www.omdbapi.com/?apikey=${API_KEY}`,
        params: {
            s: movie,
            type: 'movie',
            plot: 'full',
            r: 'json',
        },
    });

export default searchMovie;
