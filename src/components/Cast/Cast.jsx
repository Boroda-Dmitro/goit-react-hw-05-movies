import { fetchMovieCast } from 'Servises/fetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/'

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const getMovieCast = async () => {
      const movieCast = await fetchMovieCast(movieId);
      setCast(movieCast.cast);
    };

    getMovieCast();
  }, [movieId]);

  return (
    <ul>
      {cast.map(person => {
        return (
          <li key={person.id}>
            <img src={IMAGES_BASE_URL + person.profile_path} alt={person.name} />

            <p>{person.name}</p>
            <p>Charecter: {person.character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
