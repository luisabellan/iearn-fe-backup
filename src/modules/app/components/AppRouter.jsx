import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from '../../../utility/ProtectedRoute'
import Signin from "modules/signin";
import Signup from "modules/signup";
import Dashboard from "modules/dashboard";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
