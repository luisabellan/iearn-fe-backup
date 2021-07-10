import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "modules/signin";
import Signup from "modules/signup";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={null} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
