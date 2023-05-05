import { fetchMovieById } from 'Servises/fetchMovies';
import { Loader } from 'components/Loader/Loader';
import { Suspense, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';
let genres = [];

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLocation = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const getMovie = async () => {
      const movieInfo = await fetchMovieById(movieId);
      genres = movieInfo.genres.map(genre => genre.name).join(' ');
      setMovie(movieInfo);
    };

    getMovie();
  }, [movieId]);

  const releaseYear = new Date(movie.release_date).getFullYear();
  const userScore = Math.floor(movie.vote_average * 10);
  
  return (
    <div>
      <Link to={backLocation.current}>Go back</Link>
      <div className="img-box">
        <img src={IMAGES_BASE_URL + movie.poster_path} alt={movie.title} />
      </div>
      <div className="info-box">
        <h2>
          {movie.title} ({releaseYear})
        </h2>
        <p>User Score: {userScore} %</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h4>Genres</h4>
        <p>{genres}</p>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
          <Suspense fallback={<Loader/>}>
            <Outlet />
          </Suspense>
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
