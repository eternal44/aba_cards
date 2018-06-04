import React, { Component } from "react"
import { StyleSheet, View, Text, PanResponder, Animated,  } from "react-native"
import Draggable from './components/Draggable'
import Draggables from './components/Draggables'

const DRAGGABLES = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6'
]

export default class App extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Draggables
          ref={draggable => this._draggablesComponent = draggable }
          draggables={DRAGGABLES}
        />
        <View style={styles.dropZone}>
          <Text style={styles.text}>Drop here to remove!</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  dropZone: {
    backgroundColor: "#00334d",
    marginTop: "auto"
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  }
})
