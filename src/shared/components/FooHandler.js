import React from "react";
import { Link } from "react-router";

export default class FooHandler extends React.Component {
  render() {
    return (
        <div>
            <strong>Foo</strong> page
            <br />
            <Link to={ '/bar' }>Bar</Link>
        </div>
    );
  }
}
