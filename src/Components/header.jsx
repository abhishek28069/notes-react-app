import React, { Component } from "react";

class Header extends Component {
  state = {};

  render() {
    return (
      <div className="header">
        <h1>NOTES APP</h1>
        <div className="btnDiv">
          <button className="addBtn" onClick={this.props.handleOpen}>
            Add Note
          </button>
        </div>
      </div>
    );
  }
}

export default Header;
