import React, { Component } from "react";
import { Provider } from "react-redux";
import TodoListContainer from "../TodoList/TodoListContainer";
import "./App.css";
import createStore from "../../model/createStore";

class App extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <TodoListContainer />
      </Provider>
    );
  }
}

export default App;
