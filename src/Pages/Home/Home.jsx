import { fetchTrendingMovies } from 'Services/fetchMovies';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './Home.module.css';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const getMovies = async () => {
      const movies = await fetchTrendingMovies();
      setTrendingMovies(movies);
    };

    getMovies();
  }, []);

  return (
    <>
      <h2 className={css.title}>Trending today</h2>
      <ul className={css.list}>
        {trendingMovies.map(movie => {
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
    </>
  );
};

export default Home;
