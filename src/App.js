import React, { Component } from "react"
import { StyleSheet, View, Text, PanResponder, Animated,  } from "react-native"
import Draggable from './components/Draggable'

export default class App extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.ballContainer} />
        <View style={styles.row}>
          <Draggable />
          <Draggable />
          <Draggable />
          <Draggable />
          <Draggable />
        </View>
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
  ballContainer: {
    height: 0
  },
  row: {
    height: 400,
    flexDirection: "row"
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
