import React from "react";
import {Switch, Redirect} from "react-router-dom";

const Home = () => {
  return (
    <Switch>
      <Redirect from="/" to="/people/profile"/>
    </Switch>
  )
};

export default Home;
