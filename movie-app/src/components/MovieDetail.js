import PropTypes from 'prop-types';

function MovieDetail({ id, title, summary, genres }) {
  return (
    <div>
      <h2>Movie Detail</h2>
      <h1>{title}</h1>
      <p>{summary}</p>
    </div>
  );
}

MovieDetail.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;
