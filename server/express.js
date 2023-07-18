import path from "path";
import fs from "fs";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { matchPath } from "react-router-dom";

import App from "../src/App";
import routes from "../src/routes/index";
import { StaticRouter } from "react-router-dom/server";
// import expressStaticGzip from "express-static-gzip";
const app = express();
const router = express.Router();
require("dotenv").config();

const PORT = process.env.PORT || 3003;

/* app.use("/build/assets", expressStaticGzip('/build/assets', {
  enableBrotli: true,
  orderPreference: ['br', 'gz'],
  setHeaders: function (res, path) {
      res.setHeader("Cache-Control", "assets, max-age=31536000");
  }
}));
app.use(express.static("build/assets")); */
app.use("/build", express.static("build"));

app.use((req, res, next) => {
  let url = req.path.split("/");

  if (Array.isArray(url)) {
    url = url.filter((el) => el != "");
  }

  if (Array.isArray(url)) {
    url = url.join("/");
  }

  if (
    /\.js|\.css|\.jpg|\.jpeg|\.png|\.svg|\.ttf|\.woff|\.woff2|\.eot|\.svg|\.ico|\.mp3|\.ogg/.test(
      url
    )
  ) {
    res.redirect("/build/" + url);
  } else {
    next();
  }
});

app.use(express.static(__dirname));

const getUserIP = (req) => {
  try{
      var ip = (req.headers['x-forwarded-for'] || '').split(',').pop() ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress;
      
      if (ip.substr(0, 7) == "::ffff:") {
          ip = ip.substr(7)
      }
      return ip;
  }catch(e){
      return null;
  }
}


const renderResponse = async (req, res, next) => {
  let Routes = routes();
  let reqUrl = req.originalUrl;
  var fullUrl = getProtocol(req) + "://" + req.get("host") + req.originalUrl;
  fullUrl = fullUrl.replace(":" + PORT, "");
  let currentRoute =
    Routes.find((route) => matchPath(req.originalUrl, route.path)) || {};

    if (Object.keys(currentRoute).length === 0 && reqUrl.includes('/team-members/')) {
      console.log("reqUrl.include('/team-members/')---------------------------------------------");
      const matchedRoute = Routes.find(route => {
        const params = route.path.match(/:[^/]+/g) || [];
        console.log('Params: ', params);
        const regex = new RegExp('^' + route.path.replace(/:[^/]+/g, '([^/]+)') + '$');
        console.log('regex: ', regex);

        console.log(
          ' regex.test(urlPath) && params.length > 0: ',
          regex.test(reqUrl) && params.length > 0
        );
        return regex.test(reqUrl) && params.length > 0;
      });
      console.log('matchedRoute', matchedRoute);
      currentRoute = matchedRoute;
      console.log("reqUrl.include('/team-members/')---------------------------------------------");
    } 
  let promise;
  let metaPromise;

  if (currentRoute.loadData) {
    const param = reqUrl.split("/").pop();
    if (param.indexOf("?") > -1) {
      param = param.split("?")[0];
    }
    promise = currentRoute.loadData(param);
  } else {
    promise = Promise.resolve(null);
  }

  if (currentRoute.getMetaData) {
    metaPromise = currentRoute.getMetaData();
  } else {
    metaPromise = Promise.resolve(null);
  }

  let APP_CONFIG = {};

  let apiData = {};
  let metaData = {};
  const indexFile = path.resolve("./build/index.html");

  await promise
    .then(
      (response) => {
        if (response && Array.isArray(response)) {
          const newResponse = response.map((res) => res.data);
          apiData = newResponse;
          // if (currentRoute.setSeoData) {
          //   const seo_data = currentRoute.setSeoData(response.data);
          //   seoData = { ...seoData, ...seo_data };
          // }
        } else {
          apiData = response.data;
        }
      },
      (error) => {
        console.log("error", error);
      }
    )
    .catch((error) => {
      console.log("node apiData error", error);
    });

  await metaPromise
    .then(
      (response) => {
        if (response && response.data !== undefined && typeof response.data[0] !== 'undefined') {
          metaData = response.data[0]?.metatag?.value;
        }
      },
      (error) => {
        console.log("error", error);
      }
    )
    .catch((error) => {
      console.log("node apiData error", error);
    });

  const context = { apiData, metaData };
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={reqUrl}>
      {/* <App /> */}
      <App location={reqUrl} referer={req.headers.referer} context={context} config={APP_CONFIG} />
    </StaticRouter>
  );

  fs.readFile(indexFile, "utf8", (err, indexData) => {
    if (err) {
      return res.status(500).send("Oops, better luck next time!");
    }

    if (context.status === 404) {
      res.status(404);
    }

    if (context.url) {
      return res.redirect(301, context.url);
    }

    const metaTags = `<meta name="robots" content="INDEX,FOLLOW"/>
                      <meta property="author" content="drupal.dotsquares.com" />
                      <meta name="title" content="${metaData.title || "Hire Drupal Developers At Dotsquares | Drupal Development Company"}">
                      <meta name="description" content="${metaData.description ||
      "Looking for a Drupal development company you can rely on? Get a supportive Drupal Web Development experience with care and precision with Dotsquares. Get a Free Consultation today."
      }">
                      <meta property="og:url" content="${metaData.canonical_url}" />
                      <meta property="og:type" content="website" />
                      <meta property="og:title" content="${metaData.title ||
      "Hire Drupal Developers At Dotsquares | Drupal Development Company"
      }" />
                      <meta property="og:description" content="${metaData.description ||
      "Looking for a Drupal development company you can rely on? Get a supportive Drupal Web Development experience with care and precision with Dotsquares. Get a Free Consultation today."
      }" />
      <meta property="og:image" content="https://drupal1.24livehost.com/assets/images/ds-drupal.png" />
                      <meta name="twitter:title" content="${metaData.title ||
      "Hire Drupal Developers At Dotsquares | Drupal Development Company"
      }" />
                      <meta name="twitter:description" content="${metaData.description ||
      "Looking for a Drupal development company you can rely on? Get a supportive Drupal Web Development experience with care and precision with Dotsquares. Get a Free Consultation today."
      }"/>
                      <meta name="twitter:card" content="summary_large_image" />
                      <meta name="twitter:image" content="https://drupal1.24livehost.com/assets/images/ds-drupal.png" />
                      <link rel='canonical' href='${metaData.canonical_url}' />`;
// console.log('metaTags', metaTags)
    return res.send(
      indexData
        .replace("<metatags/>", `${metaTags}`)
        .replace(
          "<title>Hire Drupal Developers At Dotsquares | Drupal Development Company</title>",
          `<title>${metaData.title ? metaData.title : ""
          }</title>`
        )
        .replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        .replace(
          "</body>",
          `
            <script>
            window.__ROUTE_DATA__ = ${JSON.stringify(context)};
            window.CURRENT_IP='${getUserIP(req)}'
            </script>
          </body>`
        )
    );
  });
};

const getProtocol = (req) => {
  var proto = req.connection.encrypted ? "https" : "http";
  // only do this if you trust the proxy
  proto = req.headers["x-forwarded-proto"] || proto;
  return proto.split(/\s*,\s*/)[0];
};

app.use("*", renderResponse);

router.use(
  express.static(path.resolve(__dirname, "..", "build"), { maxAge: "30d" })
);

app.use(router);

let server;

if (process.env.HTTPS === 'true') {
  var http = require("https");

  var https_options = {
    key: fs.readFileSync(process.env.SSL_KEY_FILE, "utf-8"),
    cert: fs.readFileSync(process.env.SSL_CRT_FILE, "utf-8"),
    requestCert: false,
    rejectUnauthorized: false,
  };

  server = http.createServer(https_options, app);
  server.listen(PORT);
  console.log(
    `HTTPS server started at ${process.env.REACT_APP_WEBSITE_URL}:${PORT}`
  );
} else {
  server = app
    .listen(PORT, () => {
      console.log(
        `Express server started at ${process.env.REACT_APP_WEBSITE_URL}:${PORT}`
      );
    })
    .on("error", function (err) {
      console.log("server error", err);
    });
}
