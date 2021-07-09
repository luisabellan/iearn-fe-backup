import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signin from "modules/signin";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={null} />
        <Route path="/signin" component={Signin} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
