import { fetchMovieReviews } from 'Servises/fetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const getMovietReviews = async () => {
      const movieReviews = await fetchMovieReviews(movieId);
      setReviews(movieReviews.results);
    };

    getMovietReviews();
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie </p>;
  }

  return (
    <ul>
      {reviews.map(review => {
        return (
          <li key={review.id}>
            <h4>Author: {review.author}</h4>
            <p>Charecter: {review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
