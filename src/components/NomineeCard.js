import React, {useEffect, useState} from 'react';
import './NomineeCard.css';
import MovieDetails from "./MovieDetails.js";
import closeIcon from "../assets/closeIcon.svg";

function NomineeCard(props) {

    const [movie, setMovie] = useState(props.movie);

    return (
        <div>
            <div className="card"
                 style={{backgroundImage: `url(${movie.Poster})`}}>
            </div>
            <div className="text_title">{movie.Title}</div>
            <div className="text_year">{movie.Year}</div>
        </div>
    );
};

export default NomineeCard;
