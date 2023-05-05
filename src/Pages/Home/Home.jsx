import { fetchTrendingMovies } from 'Servises/fetchMovies';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const [trandingMovies, setTrandingMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchTrendingMovies();
      setTrandingMovies(movies);
    };

    getMovies();
  }, []);

  return (
    <ul>
      {trandingMovies.map(movie => {
        const title = movie.title ?? movie.name;
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
