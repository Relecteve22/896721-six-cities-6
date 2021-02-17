import React from "react";
import {Link} from "react-router-dom";
import Menu from "../menu/menu";
import ErrorPageNotFound from "../error-page-not-found/error-page-not-found";

const PageNotFound = () => {
  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <Menu />
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <ErrorPageNotFound />
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="/">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PageNotFound;
