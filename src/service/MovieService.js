import { searchMoviesByName, searchMovieById } from "../api/MovieAPI.js";
import {useState} from "react";

export function MoviesByName(movieName) {

    searchMoviesByName(movieName)
        .then(response => {return response.data})
        .catch(error => console.log(error));
};

export const movieById = (movieId) =>{
    return searchMovieById(movieId).then(response => response.data)
};

