import React, { PureComponent } from "react"
import {
  StyleSheet,
  View,
  Text,
  PanResponder,
  Animated
} from "react-native"
import DraggablesArea from './DraggablesArea'

export default class Draggables extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      draggables: props.draggables,
      dndEnabled: true
    }
  }

  updateDraggableState (draggable, props) {
    this.setState((state) => {
      const index = state.draggables.findIndex(({ number }) => number === draggable.number);
      return {
        draggables: [
          ...state.draggable.slice(0, index),
          {
            ...state.draggable[index],
            ...props,
          },
          ...state.draggable.slice(index + 1),
        ],
      }
    });
  }

  onRenderDraggable (draggable, screenX, screenY, width, height) {
    this.updateDraggableState(draggable, {
      tlX: screenX,
      tlY: screenY,
      brX: screenX + width,
      brY: screenY + height,
    })
  }

  removeDraggable (draggable) {
    this.setState(( state ) => {
      const index = state.draggables.findIndex(({ title }) => title === draggable.title);
      return {
        draggables: [
          // Remove the draggables
          ...state.draggables.slice(0, index),
          ...state.draggables.slice(index + 1),
        ]
      }
    })
  }

  render() {
    const { draggables } = this.state;

    return (
      <View>
        <DraggablesArea
          draggables={draggables}
          onPress={this.removeDraggable}
          onRenderDraggable={this.onRenderDraggable}
        />
      </View>
    )
  }
}
