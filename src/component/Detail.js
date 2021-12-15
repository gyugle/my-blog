import { Link } from 'react-router-dom';

function Detail({ bgImg, poster, title, release, rating, runtime, overview }) {
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w300${bgImg}`} alt={title} />
      <img src={`https://image.tmdb.org/t/p/w300${poster}`} alt={title} />
      <button>
        <Link to="/movies">BACK</Link>
      </button>
      <h3>{title}</h3>
      <div>Release Date : {release}</div>
      <div>Rating : {rating}</div>
      <div>Runtime : {runtime} mins</div>
      <div>genres list... why is there error....</div>

      <p>{overview}</p>
    </div>
  );
}

export default Detail;
