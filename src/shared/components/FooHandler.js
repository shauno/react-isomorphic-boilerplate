import React from "react";
import { Link } from "react-router";

import HeaderHandler from "./HeaderHandler";

export default class FooHandler extends React.Component {
  componentWillMount() {

  }

  render() {
    return (
      <div>
        <HeaderHandler/>
        <div>
          <strong>Foo</strong> page
          <br />
          <Link to={ '/bar' }>Bar</Link>
        </div>
      </div>
    );
  }
}
