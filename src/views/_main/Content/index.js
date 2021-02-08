import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";

//Pages
import Courses from "./Courses";

const index = (props) => {
  useEffect(() => {
    // console.log(props);
  }, []);

  return (
    <Switch>
      <Route exact component={Courses} path="/content/courses" />
    </Switch>
  );
};

export default index;
