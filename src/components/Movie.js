import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

// 시놉시스를 180자로 제한
// --> slice(시작, 끝) 함수를 통해 문자열 적용
function Movie({ title, year, summary, poster, genres }) {
    return (
        <div className="movie">
            <Link
                to={{
                    pathname: '/movie-detail',
                    state: { year, title, summary, poster, genres },
                }}
            >
                <img src={poster} alt={title} title={title} />
                <div className="movie__data">
                    <h3 className="movie__title">{title}</h3>
                    <h5 className="movie__year">{year}</h5>
                    <ul className="movie__genres">
                        {genres.map((genre, index) => {
                            return (
                                <li key={index} className="movie_genre">
                                    {genre}
                                </li>
                            );
                        })}
                    </ul>
                    <p className="movie_summary">{summary.slice(0, 180)}</p>
                </div>
            </Link>
        </div>
    );
}

// 데이터의 정의 및 관리를 위해
// propTypes의 대소문자 코딩 조심!!
Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
