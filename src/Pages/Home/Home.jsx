import { fetchTrendingMovies } from 'Servises/fetchMovies';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [trandingMovies, setTrandingMovies] = useState([]);

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
            <Link to={`/movies/${movie.id}`}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
