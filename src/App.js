import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import Draggable from './components/Draggable'

export default class App extends Component {
  render() {
    return (
      <View>
        <Draggable />
        <Draggable />
      </View>
    );
  }
}

