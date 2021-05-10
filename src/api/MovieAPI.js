import axios from 'axios';

const API_KEY = "607f7ae";

export const searchMoviesByName = (movieName, page) =>
    axios({
        method: 'GET',
        url: `https://www.omdbapi.com/?apikey=${API_KEY}`,
        params: {
            s: movieName,
            type: 'movie',
            plot: 'full',
            r: 'json',
            page: page
        },
    });

export const searchMovieById = (movieId) =>
    axios.get(`https://www.omdbapi.com/?i=${movieId}&plot=full&apikey=${API_KEY}`);



