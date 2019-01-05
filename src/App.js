import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import Main from './components/Main'

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Main />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
})
