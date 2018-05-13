import React, { Component } from 'react'
import {
  View,
  Text,
  PanResponder,
  Animated
} from 'react-native'

export default class Draggable extends Component {
  constructor(props) {
    super(props)

    const position = new Animated.ValueXY()

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy })
      },
      onPanResponderRelease: () => {
        position.setValue({ x: gesture.dx, y: gesture.dy })
      }
    })

    this.state = { panResponder, position }
  }

  render () {
    return (
      <View>
        <Animated.View
          style={this.state.position.getLayout()}
          {...this.state.panResponder.panHandlers}
        >
          Draggable
        </Animated.View>
      </View>
    )
  }
}
