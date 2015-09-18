import { Route } from "react-router";
import React from "react";

import AppHandler from "./components/AppHandler";
import FooHandler from "./components/FooHandler";
import BarHandler from "./components/BarHandler";

export default (
    <Route>
      <Route path="/" handler={ AppHandler } />
      <Route path="foo" handler={ FooHandler } />
      <Route path="bar" handler={ BarHandler } />
    </Route>
);
