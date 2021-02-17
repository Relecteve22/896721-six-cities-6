import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "../login/login";
import Main from "../main/main";
import PropertyRoom from "../property-room/property-room";
import Favorites from "../favorites/favorites";
import PageNotFound from "../page-not-found/page-not-found";

const App = (props) => {
  const {cardCount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main cardCount={cardCount} />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/offer/:id?" exact>
          <PropertyRoom />
        </Route>
        <Route path="/favorites" exact>
          <Favorites />
        </Route>
        <Route>
          <PageNotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  cardCount: PropTypes.number.isRequired,
};

export default App;
