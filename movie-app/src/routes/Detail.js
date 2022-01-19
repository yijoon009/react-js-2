import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movieD, setMovieD] = useState([]);
  const { id } = useParams();
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieD(json.data.movie);
    setLoading(false);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  // console.log(movieD);
  return (
    <div>
      {loading ? (
        <h2>Movie Detail Loading...</h2>
      ) : (
        <div>
          <img src={movieD.medium_cover_image} alt={movieD.title} />
          <h2>{movieD.title}</h2>
          <p>{movieD.language}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
