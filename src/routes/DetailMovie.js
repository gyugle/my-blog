import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../component/Detail';
function DetailMovie() {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const movie = useParams();
  const idNum = movie.id.replace(':', '');
  console.log(idNum);

  const getDetail = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${idNum}?api_key=0aad7faf82edc89543ebed57c2f7588d&language=en-US`
    );
    const json = await response.json();
    setDetail(json);
    setLoading(false);
  };
  useEffect(() => getDetail(), []);
  return (
    <div>
      {loading ? (
        'Loading...'
      ) : (
        <Detail
          bgImg={detail.backdrop_path}
          poster={detail.poster_path}
          title={detail.title}
          release={detail.release_date}
          rating={detail.vote_average}
          runtime={detail.runtime}
          overview={detail.overview}
        ></Detail>
      )}
    </div>
  );
}
export default DetailMovie;
