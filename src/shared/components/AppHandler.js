import React from "react";
import { Link } from "react-router";

import HeaderHandler from "./HeaderHandler";

export default class AppHandler extends React.Component {
  render() {
    return (
      <div>
        <HeaderHandler/>
        <div>
          Hello App Handler
          <br />
          <Link to={ '/foo' }>Foo page</Link> | <Link to={ '/bar' }>Bar page</Link>
        </div>
      </div>
    );
  }
}
