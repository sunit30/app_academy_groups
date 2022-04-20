import React from "react";
import ReactDOM from "react-dom";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="headerFlex">
        <h2>Unofficial group-work participation for App Academy JS/PY curriculum</h2>
      </div>
    );
  }
}

export default Header;
