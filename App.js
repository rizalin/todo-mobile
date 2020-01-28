import React, { Component } from 'react';
import { Provider } from "react-redux";
import Todos from "./component/todos"
import store from "./_redux/_store/store"
import { View } from 'react-native';

// parent component
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Todos />
      </Provider>
    );
  }
}