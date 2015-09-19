import React from "react";
import { Link } from "react-router";

import HeaderHandler from "./HeaderHandler";

export default class BarHandler extends React.Component {
  render() {
    return (
      <div>
        <HeaderHandler/>
        <div>
          <strong>Bar</strong> page
          <br />
          <Link to={ '/foo' }>Foo</Link>
        </div>
      </div>
    );
  }
}
