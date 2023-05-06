import { fetchMovieReviews } from 'Services/fetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const getMovieReviews = async () => {
      const movieReviews = await fetchMovieReviews(movieId);
      setReviews(movieReviews.results);
    };

    getMovieReviews();
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie </p>;
  }

  return (
    <ul className={css.reviews}>
      {reviews.map(review => {
        return (
          <li key={review.id}>
            <h4>Author: {review.author}</h4>
            <p>Character: {review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
