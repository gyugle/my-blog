import { useEffect, useState } from 'react';
import Movies from '../component/Movies';
import styles from '../css/displaymovies.module.css';

function DisplayMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const callMovies = async () => {
    const response = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=0aad7faf82edc89543ebed57c2f7588d'
    );

    const json = await response.json();

    console.log(json.results);
    setMovies(json.results);
    setLoading(false);
  };
  useEffect(() => callMovies(), []);
  return (
    <div>
      <h3>
        {loading ? (
          'Loading...'
        ) : (
          <div className={styles.movies}>
            {movies.map((movie) => (
              <Movies id={movie.id} key={movie.id} poster={movie.poster_path} />
            ))}
          </div>
        )}
      </h3>
    </div>
  );
}

export default DisplayMovies;
