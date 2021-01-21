// import external modules
import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Spinner from "../components/spinner/spinner";

// import internal(own) modules
import MainLayoutRoutes from "../layouts/routes/mainRoutes";
import FullPageLayout from "../layouts/routes/fullpageRoutes";
import ErrorLayoutRoute from "../layouts/routes/errorRoutes";

// Main Layout

// Full Layout
const LazyLogin = lazy(() => import("../views/pages/login"));
const LazyForgotPassword = lazy(() => import("../views/pages/forgotPassword"));
const LazyRegister = lazy(() => import("../views/pages/register"));
const LazyMaintainance = lazy(() => import("../views/pages/maintainance"));
const LazyLockScreen = lazy(() => import("../views/pages/lockScreen"));

// Error Pages
const LazyErrorPage = lazy(() => import("../views/pages/error"));

class Router extends Component {
   render() {
      return (
         // Set the directory path if you are deplying in sub-folder
         <BrowserRouter basename="/">
            <Switch>
               {/* Dashboard Views */}
               {/* <MainLayoutRoutes
                  exact
                  path="/"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyEcommerceDashboard {...matchprops} />
                     </Suspense>
                  )}
               /> */}

               {/* Saperate Pages Views */}
               <FullPageLayout
                  exact
                  path="/"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyLogin {...matchprops} />
                     </Suspense>
                  )}
               />
               
               <ErrorLayoutRoute
                  exact
                  path="/pages/error"
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyErrorPage {...matchprops} />
                     </Suspense>
                  )}
               />

               <ErrorLayoutRoute
                  render={matchprops => (
                     <Suspense fallback={<Spinner />}>
                        <LazyErrorPage {...matchprops} />
                     </Suspense>
                  )}
               />
            </Switch>
         </BrowserRouter>
      );
   }
}

export default Router;
