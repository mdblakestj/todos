import React, { Component } from "react";
import axios from "axios";
import "./App.css";

import TodoForm from "./components/TodoForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
  }

  componentDidMount() {
    this.getTodos();
  }
  getTodos() {
    axios
      .get("http://127.0.0.1:8000/api/")
      .then(res => {
        this.setState({ todos: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="App">
        <TodoForm />
        {this.state.todos.map(item => (
          <div>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
