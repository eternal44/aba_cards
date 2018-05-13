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
        <Text>
          Hello
        </Text>
        <Draggable />
        <Draggable />
        <Draggable />
        <Text>Where</Text>
      </View>
    );
  }
}

