import React from "react";
import PropTypes from "prop-types";
import {offerPropTypes} from "../../propTypes/offer";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Login from "../login/login";
import Main from "../main/main";
import PropertyRoom from "../property-room/property-room";
import Favorites from "../favorites/favorites";
import PageNotFound from "../page-not-found/page-not-found";

const App = (props) => {
  const {offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main
            offers={offers}
          />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/offer/:id" exact>
          <PropertyRoom
            offer={offers[0]}
          />
        </Route>
        <Route path="/favorites" exact>
          <Favorites
            offers={offers}
          />
        </Route>
        <Route>
          <PageNotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default App;
