import React from "react";
import { Switch, Route } from "react-router-dom";

//Pages
import Courses from "./Courses";
import CourseOverview from "./Courses/CourseOverview";

const index = () => {
  return (
    <Switch>
      <Route exact component={Courses} path="/content/courses" />
      <Route exact component={CourseOverview} path="/content/courses/:id" />
    </Switch>
  );
}; 

export default index;
