import React from 'react';


const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({ title, poster_path, vote_average, overview }) {
    return (
        <div className="movie-container">
            <img src={IMG_BASE_URL + poster_path} alt="영화 포스터" />
            <div className="movie-info">
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>
            <div className="movie-overview">
                {overview}
            </div>
        </div>
    );
}