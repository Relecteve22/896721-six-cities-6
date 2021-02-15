import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu/menu';
import Map from "../map/map";
import Tabs from "../tabs/tabs";
import Cities from "../cities/cities";

const App = (props) => {
  const {cardCount} = props;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <Menu />
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Tabs />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <Cities
              cardCount={cardCount}
            />
            <Map/>
          </div>
        </div>
      </main>
    </div>
  );
};

App.propTypes = {
  cardCount: PropTypes.number.isRequired,
};

export default App;
