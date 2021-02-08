import React from "react";
import { Switch, Route, Link } from "react-router-dom";

//Pages
import Courses from "./Courses";

const index = () => {
  return (
    <Switch>
      <Route exact component={Courses} path="/content/courses"/>
    </Switch>
  )
}

export default index
