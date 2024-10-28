import { lazy, Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy (()=> import ("./pages/HomePage/HomePage"));
const MoviesPage = lazy (()=>import ("./pages/MoviesPage/MoviesPage"));
const NotFoundPage = lazy (()=>import("./pages/NotFoundPage/NotFoundPage"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);
const MovieList = lazy(() => import("./components/MovieList/MovieList"));
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
            <main>
          <Suspense fallback = {<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
      </Routes>
    </Suspense >
        </main>
      
    </>
  );
}

export default App;
