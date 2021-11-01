import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import GlobalStyle from "globalStyle";
import Spinner from "modules/common/components/Spinner";
import Theme from "../src/theme";

import reportWebVitals from "reportWebVitals";

const App = lazy(() => import("modules/app"));

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Theme>
        <App />
      </Theme>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
