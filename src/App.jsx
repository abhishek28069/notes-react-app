import React, { Component } from "react";
import Header from "./Components/header";
import Note from "./Components/note";
import Display from "./Components/display";
import "./styles.css";

class App extends Component {
  state = {
    className: "",
    notesItems: [],
    value: "",
    editing: false,
  };
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleOpen = () => {
    let { className } = this.state;
    className = " open";
    this.setState({ className });
  };

  handleClose = () => {
    let { className } = this.state;
    className = "";
    this.setState({ className });
  };

  handleSave = () => {
    let { notesItems } = this.state;
    let { editing } = this.state;
    let item = {
      id: Date.now(),
      value: this.state.value,
    };
    if (item.value !== "" && editing === false) {
      notesItems = [...notesItems, item];
      this.setState({ notesItems });
    }
    if (editing) {
      for (let i = 0; i < notesItems.length; i++) {
        if (notesItems[i].id === editing) {
          notesItems[i].value = item.value;
          notesItems[i].id = Date.now();
        }
      }
      this.setState({ notesItems });
      this.setState({ editing: false });
    }
    this.setState({ value: "" });
    let { className } = this.state;
    className = "";
    this.setState({ className });
  };

  handleDel = (id) => {
    console.log(id);
    let { notesItems } = this.state;
    const filteredNotesItems = notesItems.filter((item) => item.id !== id);
    this.setState({ notesItems: filteredNotesItems });
  };

  handleEdit = (item) => {
    console.log("editing id:", item.id);
    let { notesItems } = this.state;
    let { editing } = this.state;
    this.setState({ value: item.value });
    this.setState({ editing: item.id });
    let { className } = this.state;
    className = " open";
    this.setState({ className });
  };

  render() {
    console.log(this.state);
    return (
      <div className="app">
        <Header handleOpen={this.handleOpen} className={this.state.className} />
        <div className={"noteModal" + this.state.className}>
          <div className="noteModalContent">
            <textarea
              className="textSection"
              id="textSection"
              onChange={this.handleChange}
              value={this.state.value}
            ></textarea>
            <div className="btnDiv">
              <button className="saveBtn" onClick={this.handleSave}>
                Save
              </button>
              <button className="closeBtn" onClick={this.handleClose}>
                Close
              </button>
            </div>
          </div>
        </div>

        <Display
          notesItems={this.state.notesItems}
          handleEdit={this.handleEdit}
          handleDel={this.handleDel}
        />
      </div>
    );
  }
}

export default App;
