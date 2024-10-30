import React from "react";
import css from "./MovieList.module.css";
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movies = [] }) => {
  const location = useLocation();
  return (
    <div>
      <ul className={css.ul}>
        {movies.length > 0 &&
          movies.map((movie) => (
            <li className={css.list} key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default MovieList;