import React, { Component } from "react";

class Note extends Component {
  state = {};

  render() {
    return (
      <div className={"noteModal" + this.props.className}>
        <div className="noteModalContent">
          <textarea
            className="textSection"
            id="textSection"
            onChange={this.handleChange}
            value={this.props.value}
            autoFocus
          ></textarea>
          <div className="btnDiv">
            <button className="saveBtn" onClick={this.props.handleSave}>
              Save
            </button>
            <button className="closeBtn" onClick={this.props.handleClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Note;
