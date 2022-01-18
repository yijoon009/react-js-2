import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movieD, setMovieD] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieD(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Movie Detail Loading...</h2>
      ) : (
        <div>
          <ul>
            {movieD.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Detail;
