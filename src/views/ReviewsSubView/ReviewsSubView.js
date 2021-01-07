import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from '../../services/themoviedbApi';

function ReviewsSubView() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getReviewsById(movieId).then(res => setReviews(res.results));
  }, [movieId]);

  return (
    <>
      <h3>Reviews</h3>
      {reviews && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <div>{review.author}</div>
              <div>{review.created_at}</div>
              <div>{review.content}</div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ReviewsSubView;
