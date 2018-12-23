import React from "react";

import Usecase from "usecase/todo";
import { Todo } from "domain";

import { Input, Item, ClearButton } from "./todos";

import "./app.css";

interface Props {
  usecase: Usecase;
}

interface State {
  input: string;
  todos: Todo[];
}

export default class App extends React.Component<Props, State> {
  private usecase: Usecase;

  constructor(props: Props) {
    super(props);
    this.usecase = this.props.usecase;
    this.state = {
      input: "",
      todos: []
    };
  }

  componentDidMount() {
    const todos = this.usecase.findAll();
    this.setState({ todos });
  }

  handleChange(e: any) {
    this.setState({ input: e.target.value });
  }

  onKeyPress(e: any) {
    if (e.key !== "Enter") {
      return;
    }

    const input = e.target.value;
    this.usecase.add(input);
    this.setState({ input: "" });
    const todos = this.usecase.findAll();
    this.setState({ todos });
  }

  finishTodo(id: string) {
    this.usecase.finish(id);
    const todos = this.usecase.findAll();
    this.setState({ todos });
  }

  clearTodos() {
    this.usecase.finishAll();
    this.setState({ todos: [] });
  }

  render() {
    const { todos } = this.state;
    return (
      <section className="todoapp">
        <Input
          value={this.state.input}
          handleChange={this.handleChange.bind(this)}
          onKeyPress={this.onKeyPress.bind(this)}
        />

        <section>
          <ul className="list-group">
            {this.state.todos.map(todo => (
              <Item
                key={todo.id}
                todo={todo}
                onFinish={this.finishTodo.bind(this)}
              />
            ))}
          </ul>
          {todos.length > 0 && (
            <div className="right-align">
              <ClearButton onClick={this.clearTodos.bind(this)} />
            </div>
          )}
        </section>
      </section>
    );
  }
}
