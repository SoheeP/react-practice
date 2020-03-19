import React from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';

function Movie({title, poster, genres, synopsis}){
  return (
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie__Column">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genres, idx) => <MovieGenres genres={genres} key={idx} />)}
        </div>
        <div className="Movie__Synopsis">
          <LinesEllipsis 
            text= {synopsis}
            maxLine='3'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
        </div>
      </div>
    </div>
  );
}

function MoviePoster({ poster, alt }) {
  return <img src={poster} alt={alt} title={alt} className="Movie__Poster" />;
}

function MovieGenres({genres}){
  // 더 세련된 코딩방식이라고.. '_'
  return(
  <span className="Movie__Genres">{genres} </span>
  )
}

// 함수형에서 체크할때
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired,
};

MoviePoster.prototypes = {
  poster: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

MovieGenres.prototypes = {
  genres: PropTypes.array.isRequired
};
export default Movie