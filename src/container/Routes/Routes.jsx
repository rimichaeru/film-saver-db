import React from "react";
import styles from "./Routes.module.scss";
import { Switch, Route } from "react-router-dom";
import Home from "../Home"
import Favourites from "../Favourites"

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/favourites">
        <Favourites />
      </Route>
      <Route exact path="/*">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;
