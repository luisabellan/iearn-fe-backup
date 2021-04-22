// import external modules
import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter, Switch, Redirect, useHistory } from "react-router-dom";
import Spinner from "../components/spinner/spinner";

// import internal(own) modules
import MainLayoutRoutes from "../layouts/routes/mainRoutes";
import FullPageLayout from "../layouts/routes/fullpageRoutes";
import ErrorLayoutRoute from "../layouts/routes/errorRoutes";

//Context
import withAuthentication from "../utility/withContexts/withUser";

//API
import api from "../api/api";

// Main Layout
const Home = lazy(() => import("../views/_main/Home"));
const Overview = lazy(() => import("../views/_main/Overview"));
const Support = lazy(() => import("../views/_main/Support/Support"));
const SupportDetails = lazy(() =>
  import("../views/_main/Support/SupportDetails")
);
const Settings = lazy(() => import("../views/_main/Settings"));
const Calendar = lazy(() => import("../views/_main/Calendar"));
const Courses = lazy(() => import("../views/_main/Content/Courses"));
const Videos = lazy(() => import("../views/_main/Content/Videos"));
const Files = lazy(() => import("../views/_main/Content/Files"));
const FAQs = lazy(() => import("../views/_main/Content/FAQs"));
const Profile = lazy(() => import("../views/_main/Profile"));
const User = lazy(() => import("../views/_main/Profile/User/userProfile"));
const Deals = lazy(() => import("../views/_main/Deals/Main"));
const DecisionTree = lazy(() => import("../views/_main/Deals/DecisionTree"));
const NewDeal = lazy(() => import("../views/_main/Deals/NewDeal"));
const Directory = lazy(() => import("../views/_main/Directory"));

// Full Layout
const Login = lazy(() => import("../views/_main/Login"));
const SignUp = lazy(() => import("../views/_main/SignUp"));

// const LazyForgotPassword = lazy(() => import("../views/pages/forgotPassword"));
// const LazyRegister = lazy(() => import("../views/pages/register"));
// const LazyMaintainance = lazy(() => import("../views/pages/maintainance"));
// const LazyLockScreen = lazy(() => import("../views/pages/lockScreen"));

// Error Pages
const LazyErrorPage = lazy(() => import("../views/pages/error"));

const Router = ({ user, setUser }) => {
  const history = useHistory();

  const fetchUser = async () => {
    try {
      const { data } = await api.get("/users/current");
      setUser(data);
      // console.log(data);
    } catch (e) {
      setUser(null);
      history.push("/login");
    }
  };

  useEffect(() => {
    if (!user) {
      fetchUser(setUser);
    }
  }, []);

  if (!user) return <Spinner />;

  return (
    // Set the directory path if you are deplying in sub-folder
    <>
      <Switch>
        {/* Main Dashboard Views */}
        <MainLayoutRoutes
          exact
          path="/overview"
          render={(matchprops) => (
            <Suspense fallback={<Spinner />}>
              <Overview {...matchprops} />
            </Suspense>
          )}
        />
        <MainLayoutRoutes
          exact
          path="/support"
          render={(matchprops) => (
            <Suspense fallback={<Spinner />}>
              <Support {...matchprops} />
            </Suspense>
          )}
        />

        <MainLayoutRoutes
          exact
          path="/support/:id"
          render={(matchprops) => (
            <Suspense fallback={<Spinner />}>
              <SupportDetails {...matchprops} />
            </Suspense>
          )}
        />

        <MainLayoutRoutes
          exact
          path="/settings/:category"
          render={(matchprops) => (
            <Suspense fallback={<Spinner />}>
              <Settings {...matchprops} />
            </Suspense>
          )}
        />

        {/*Content Category*/}
        <MainLayoutRoutes
          exact
          path="/content/courses"
          render={(matchprops) => (
            <Suspense fallback={<Spinner />}>
              <Courses {...matchprops} />
            </Suspense>
          )}
        />

        {/*All Courses Viewer*/}
        <MainLayoutRoutes
          exact
          path="/content/courses/:id"
          render={(matchprops) => (
            <Suspense fallback={<Spinner />}>
              <Courses {...matchprops} />
            </Suspense>
          )}
        />

        {/*Course Lessons Viewer*/}
        <MainLayoutRoutes
          exact
          path="/content/courses/:courseId/:id"
          render={(matchprops) => (
            <Suspense fallback={<Spinner />}>
              <Courses {...matchprops} />
            </Suspense>
          )}
        />

        <MainLayoutRoutes
          exact
          path="/content/videos"
          render={(matchprops) => (
            <Suspense fallback={<Spinner />}>
              <Videos {...matchprops} />
            </Suspense>
          )}
        />

        <MainLayoutRoutes
          exact
          path="/content/faqs"
          render={(matchprops) => (
            <Suspense fallback={<Spinner />}>
              <FAQs {...matchprops} />
            </Suspense>
          )}
        />

        <MainLayoutRoutes
          exact
          path="/content/files"
          render={(matchprops) => (
            <Suspense fallback={<Spinner />}>
              <Files {...matchprops} />
            </Suspense>
          )}
        />

        <MainLayoutRoutes
          exact
          path="/calendar"
          render={(matchprops) => (
            <Suspense fallback={<Spinner />}>
              <Calendar {...matchprops} />
            </Suspense>
          )}
        />

        <MainLayoutRoutes
          exact
          path="/people/profile"
          render={(matchprops) => (
            <Suspense fallback={<Spinner />}>
              <Profile {...matchprops} />
            </Suspense>
          )}
        />

        <MainLayoutRoutes
          exact
          path="/people/user"
          render={(matchprops) => (
            <Suspense fallback={<Spinner />}>
              <User {...matchprops} />
            </Suspense>
          )}
        />

        <MainLayoutRoutes
          exact
          path="/people/directory"
          render={(matchprops) => (
            <Suspense fallback={<Spinner />}>
              <Directory {...matchprops} />
            </Suspense>
          )}
        />

        <MainLayoutRoutes
          exact
          path="/people/deals"
          render={(matchprops) => (
            <Suspense fallback={<Spinner />}>
              <Deals {...matchprops} />
            </Suspense>
          )}
        />

        <MainLayoutRoutes
          exact
          path="/people/deals/decision-tree"
          render={(matchprops) => (
            <Suspense fallback={<Spinner />}>
              <DecisionTree {...matchprops} />
            </Suspense>
          )}
        />

        <MainLayoutRoutes
          exact
          path="/people/deals/new-deal"
          render={(matchprops) => (
            <Suspense fallback={<Spinner />}>
              <NewDeal {...matchprops} />
            </Suspense>
          )}
        />

        {/* Full Pages Views */}
        <FullPageLayout
          exact
          path="/"
          render={(matchprops) => (
            <Suspense fallback={<Spinner />}>
              <Home {...matchprops} />
            </Suspense>
          )}
        />

        <FullPageLayout
          exact
          path="/login"
          render={(matchprops) => (
            <Suspense fallback={<Spinner />}>
              <Login {...matchprops} />
            </Suspense>
          )}
        />
        <FullPageLayout
          exact
          path="/signup"
          render={(matchprops) => (
            <Suspense fallback={<Spinner />}>
              <SignUp {...matchprops} />
            </Suspense>
          )}
        />

        <ErrorLayoutRoute
          exact
          path="/pages/error"
          render={(matchprops) => (
            <Suspense fallback={<Spinner />}>
              <LazyErrorPage {...matchprops} />
            </Suspense>
          )}
        />

        <ErrorLayoutRoute
          render={(matchprops) => (
            <Suspense fallback={<Spinner />}>
              <LazyErrorPage {...matchprops} />
            </Suspense>
          )}
        />
      </Switch>
    </>
  );
};

export default withAuthentication(Router);
