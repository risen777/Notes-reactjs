import React, { Component } from "react";

class Note extends Component {
  render() {
    return <div>{this.props.text}</div>;
  }
}

class Notes extends Component {
  render() {
    return (
      <div>
        {this.props.notes.map((text, index) => {
          return <Note text={text} key={index} />;
        })}
      </div>
    );
  }
}

export default Notes;
