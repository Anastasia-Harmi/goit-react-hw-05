import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchReviewByID } from "../../api/filmApi";
import css from "./MovieReviews.module.css";

const MovieReviews = () => {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviewByID() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchReviewByID(movieId);
        console.log(data);
        setReview(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getReviewByID();
  }, [movieId]);

  return (
    <div>
      <h2 className={css.title}>Movie Reviews</h2>
      <ul className={css.ul}>
        {review && review.length > 0 ? (
          review.map((result) => (
            <li className={css.item} key={result.id}>
              <p className={css.author}>Author: {result.author}</p>
              <p className={css.review}>{result.content}</p>
            </li>
          ))
        ) : (
          <p>No review information available.</p>
        )}
      </ul>
    </div>
  );
};

export default MovieReviews;