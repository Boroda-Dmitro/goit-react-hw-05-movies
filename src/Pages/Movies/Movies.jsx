import { fetchSerchMovies } from 'Servises/fetchMovies';
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const location = useLocation();
  const params = searchParams.get('query');

  const handleChange = e => {
    setSearch(e.target.value.trim());
    if (e.target.value === '') {
        setSearchParams({})
    }
  };

  useEffect(() => {
    if (!params) {
      return;
    }
    const fetchMovies = async () => {
      try {
        const searchedMovies = await fetchSerchMovies(params);
        if (searchedMovies.length === 0) {
          return toast.error(`No movies found for '${params}'`);
        }
        setMovies(searchedMovies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, [params]);

  const handleSubmit = e => {
    e.preventDefault();
    if (search === '') {
      return toast.error(`Please enter a movie name`);
    }

    setSearchParams({ query: search });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleChange}
          value={search}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.length > 0 && params &&
          movies.map(movie => {
            const title = movie.title ?? movie.name;
            return (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{ from: location }}>{title}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Movies;
