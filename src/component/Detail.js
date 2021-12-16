import { Link } from 'react-router-dom';
import styles from '../css/detail.module.css';
function Detail({
  bgImg,
  poster,
  title,
  release,
  genres,
  rating,
  runtime,
  overview,
}) {
  return (
    <div>
      <div className={styles.background}>
        <img
          src={`https://image.tmdb.org/t/p/w1280${bgImg}`}
          alt={title}
          className={styles.bgImg}
        />
      </div>
      <Link to="/movies">
        <button className={styles.btn}>
          <img
            src={require('../img/backBtn.png').default}
            alt="backBtn"
            className={styles.backBtn}
          />
        </button>
      </Link>
      <div className={styles.detail}>
        <div className={styles.poster}>
          <img src={`https://image.tmdb.org/t/p/w300${poster}`} alt={title} />
        </div>
        <div className={styles.description}>
          <h1>{title}</h1>
          <hr width={title.length * 18} />
          <div>Release Date : {release}</div>
          <div>
            Genres
            <ul>
              {genres.map((genre) => {
                return <li key={genre.id}> {genre.name} </li>;
              })}
            </ul>
          </div>
          <div>Rating : {rating}</div>
          <div>Runtime : {runtime} mins</div>
          <hr width="50%" />
          <div>
            Overview<p className={styles.overview}>{overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
