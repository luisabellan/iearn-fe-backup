import React from "react";
import {Switch, Redirect} from "react-router-dom";

const Home = () => {
  return (
    <Switch>
      <Redirect from="/" to="/login"/>
    </Switch>
  )
};

export default Home;
