import React, {useEffect} from "react";
import { Switch, Route, useLocation } from "react-router-dom";

//Pages
import Courses from "./AllCourses";
import CourseOverview from "./CourseOverview";
import CourseDetails from "./CourseDetails";
import Videos from "../Videos";

//Context
import withTitleContext from "../../../../layouts/utils/withContexts/withTitle";

const index = (props) => {
  const location = useLocation();

  useEffect(() => {
    if(location.pathname.includes("courses")) {
      props.setActiveSubPage("Courses")
    }
    return () => {
      props.setActiveSubPage("")
    }
  }, [])

  return (
    <Switch>
      <Route exact component={Courses} path="/content/courses" />
      <Route exact component={CourseOverview} path="/content/courses/:id" />
      <Route exact component={CourseDetails} path="/content/courses/:courseId/:id" />
      <Route exact component={Videos} path="/content/videos" />
    </Switch>
  );
};

export default withTitleContext(index);
