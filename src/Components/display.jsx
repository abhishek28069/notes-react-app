import React, { Component } from "react";
import empty from "../empty.svg";
class Display extends Component {
  state = {};

  renderNotes() {
    let { notesItems } = this.props;
    if (notesItems.length === 0) {
      return (
        <React.Fragment>
          <img src={empty} alt="empty here" height="200" />
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        {notesItems.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="content">{item.value}</div>
              <div className="btnDiv">
                <button
                  className="editBtn"
                  onClick={() => this.props.handleEdit(item)}
                >
                  Edit
                </button>
                <button
                  className="delBtn"
                  onClick={() => this.props.handleDel(item.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }

  render() {
    return <div className="display">{this.renderNotes()}</div>;
  }
}

export default Display;
