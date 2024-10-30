import React, { useEffect, useState, useRef, Suspense } from "react";
import css from "./MovieDetalisPage.module.css";
import { useParams } from "react-router";
import { fetchVideosByID } from "../../api/filmApi";
import { NavLink, Outlet, Link, useLocation } from "react-router-dom";

import MovieCast from "../../components/MovieCast/MovieCast";
import MovieReviews from "../../components/MovieReviews/MovieReviews";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  const backLinkRef = useRef(location.state?.from || "/movies");

  useEffect(() => {
    async function getVideosByID() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchVideosByID(movieId);
        console.log(data);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getVideosByID();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader isLoading={loading} />}
      <Link to={backLinkRef.current}>
        <button className={css.btn}>Go Back</button>
      </Link>
      {movie && (
        <div className={css.div}>
          <div className={css.photo}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={movie.title}
            />
          </div>
          <div className={css.container}>
            <h1 className={css.title}>{css.title}</h1>
            <h2 className={css.text}>Overview</h2>
            {movie.overview}
            <h2 className={css.text}>Budget</h2> {movie.budget}
            <h2 className={css.text}>Origin country</h2>{" "}
            {movie.origin_country}
            <h2 className={css.text}>Genres</h2>
             </div>
        </div>
      )}
      <ul>
        <li className={css.item}>
          <NavLink className={css.link} to="cast">
            Movie Cast
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink className={css.link} to="reviews">
            Movie Review
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading inner component</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;