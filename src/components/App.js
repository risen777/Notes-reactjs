import React, { Component } from "react";
import Notes from "./Notes";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      notes: [
        "**Покупки**: чай,кофе, _молоко_",
        "**Дела**: закончить перевод_",
        "_Ненужная заметка, удалить_",
        "**Нужная заметка**"
      ]
    };
  }
  render() {
    return <Notes notes={this.state.notes} />;
  }
}
export default App;
