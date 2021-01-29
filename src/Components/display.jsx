import React, { Component } from "react";

class Display extends Component {
  state = {};

  renderNotes() {
    let { notesItems } = this.props;
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
