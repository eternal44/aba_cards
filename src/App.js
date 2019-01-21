import React, { Component } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import { Provider } from 'react-redux'
import Main from './components/Main'
import store from './store'

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Main />
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
})
