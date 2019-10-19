import React, { Component } from "react";
import axios from "axios";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", body: "" };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleBodyChange(event) {
    this.setState({ body: event.target.value });
  }

  handleSubmit(event) {
    alert(
      "A name was submitted: " +
        this.state.title +
        "a Body was submitted: " +
        this.state.body
    );
    event.preventDefault();
  }
  postTodos(event) {
    axios
      .post(
        "http://127.0.0.1:8000/api/todo/",
        { title: this.state.title, body: this.state.body },
        { headers: { "Content-Type": "application/json" } }
      )
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <form
        onSubmit={e => {
          this.postTodos(e);
        }}
      >
        <label>
          Title:
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
        </label>
        <label>
          Body:
          <input
            type="text"
            value={this.state.body}
            onChange={this.handleBodyChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default TodoForm;
