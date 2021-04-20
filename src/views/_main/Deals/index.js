import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";

//Pages
import Main from "./Main";
import DecisionTree from "./DecisionTree";
import NewDeal from "./NewDeal";

//Context
import withTitleContext from "../../../../utility/withContexts/withTitle";

const index = (props) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("deals")) {
      props.setActiveSubPage("Deals");
    }
    return () => {
      props.setActiveSubPage("");
    };
  });

  return (
      <Switch>
        <Route exact component={Main} path="/people/deals" />
        <Route
          exact
          component={DecisionTree}
          path="/people/deals/decision-tree"
        />
        <Route exact component={NewDeal} path="/people/deals/new-deal" />
      </Switch>
  );
};

export default withTitleContext(index);
