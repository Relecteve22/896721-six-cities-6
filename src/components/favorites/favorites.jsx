import React from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../propTypes/offer";
import {Link} from "react-router-dom";
import Menu from "../menu/menu";
import CardFavorite from "../favorite-cities-card/favorite-cities-card";

const Favorites = ({offers}) => {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <Menu />
        </div>
      </header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.map(function (item, index) {
                    return (< CardFavorite
                      key={`card-` + item.type + index}
                      offer={item}
                    />);
                  })}
                </div>
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.map(function (item, index) {
                    return (< CardFavorite
                      key={`card-` + item.type + index}
                      offer={item}
                    />);
                  })}
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
};

Favorites.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default Favorites;
