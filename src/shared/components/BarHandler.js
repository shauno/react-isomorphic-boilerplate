import React from "react";
import { Link } from "react-router";

export default class BarHandler extends React.Component {
  render() {
    return (
        <div>
            <strong>Bar</strong> page
            <br />
            <Link to={ '/foo' }>Foo</Link>
        </div>
    );
  }
}
