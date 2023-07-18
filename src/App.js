import React from "react";
import "./App.css";
// import { BrowserRouter } from "react-router-dom";

import Routing from "./routes/Routing";
import "./assets/css/style.css";
import { BrowserRouter, Router } from "react-router-dom";
import { createBrowserHistory, createMemoryHistory } from "history";
import { MetaTags } from "react-meta-tags";
const isServer = !(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
);
const history = isServer
  ? createMemoryHistory({
    initialEntries: ["/"],
  })
  : createBrowserHistory();


class AppRouter extends React.Component {
  render() {
    return this.props.children;
  }
}

function App(props) {

  let CompatibleRouter = BrowserRouter;
  if (isServer) {
    CompatibleRouter = AppRouter;
  }
  let metaData = {};
  if (typeof window !== 'undefined' && window.__ROUTE_DATA__ && window.__ROUTE_DATA__.metaData) {
    metaData = window.__ROUTE_DATA__.metaData;
  }

  return (
    <CompatibleRouter
      basename={process.env.PUBLIC_URL}
      // history={history}
      forceRefresh={true}
    >
      <MetaTags>
        <title>
          {metaData.title}
        </title>

        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content={metaData.title}
        />
        <meta
          property="og:description"
          content={metaData.descripiton}
        />
        <meta
          property="og:url"
          content={metaData.canonical_url}
        />
        <meta property="og:site_name" content="Drupal Dotsquares" />
      </MetaTags>
      <Routing apiData={props.context ? props.context.apiData : []} {...props} />
    </CompatibleRouter>
  );
}

export default App;
