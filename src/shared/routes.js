import { Route } from "react-router";
import React from "react";

import AppHandler from "./components/AppHandler";
import FooHandler from "./components/FooHandler";
import BarHandler from "./components/BarHandler";

export default (
  <Route>
    <Route handler={ FooHandler } path="foo" />
    <Route handler={ BarHandler } path="bar" />
  </Route>
);
