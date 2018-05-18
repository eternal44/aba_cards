import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import Foo from './components/Draggable'

export default class App extends Component {
  render() {
    return (
      <View>
        <Foo />
      </View>
    );
  }
}

