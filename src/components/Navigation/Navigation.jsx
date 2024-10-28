import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const Navigation = () => {
  const buildNavLikClass = ({ isActive }) =>
    clsx(css.link, isActive && css.active);
  return (
    <div>
      <header className={css.header}>
        <div classame={css.container}>
          <nav className={css.nav}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
