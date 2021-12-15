import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../css/displaymovies.module.css';

function Movies({ id, poster, title }) {
  Movies.propTypes = {
    id: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
  };
  return (
    <div id={id}>
      <Link to={`/movies:${id}`}>
        <img
          className={styles.coverImg}
          src={`https://image.tmdb.org/t/p/w300${poster}`}
          alt={title}
        />
      </Link>
    </div>
  );
}
export default Movies;
