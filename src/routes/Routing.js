import React from "react";
import { Route, Routes } from "react-router-dom";
import GlobalRoutes from "./index";

export default function Routing(props) {
  return (
    <>
      {GlobalRoutes().map((route) => {
        return (
          <Routes>
            <Route {...props} path={route.path} exact element={route.element} />
          </Routes>
        );
      })}
    </>
  );
}
