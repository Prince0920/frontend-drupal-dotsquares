import React from "react";
import { Route, Routes } from "react-router-dom";
import GlobalRoutes from "./index";
import ComingSoon from "../pages/comingSoon/ComingSoon";

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
      <Routes>
         {/* Catch-all route */}
         <Route path="*" element={<ComingSoon />} />
      </Routes>
    </>
  );
}
