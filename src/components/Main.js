import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import SideMenu from 'react-native-side-menu'
import { Provider } from 'react-redux'

import Draggables from './Draggables'
import Menu from './Menu'
import store from '../store'

export default class Main extends Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)

    this.state = {
      isOpen: false,
      selectedItem: 'About'
    }
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  updateMenuState (isOpen) {
    this.setState({ isOpen })
  }

  render () {
    const menu = <Menu />

    return (
      <Provider store={store}>
        <SideMenu
          menu={menu}
          isOpen={this.state.isOpen}
          onChange={isOpen => this.updateMenuState(isOpen)}
          openMenuOffset={175}
        >
          <View style={styles.container}>
            <Draggables
              ref={draggable => (this._draggablesComponent = draggable)}
            />
            <View style={styles.dropZone}>
              <Text >Remove</Text>
              <Image
                source={trashBinImage}
                style={{ width: 32, height: 32 }}
              />
            </View>
            <Text
              onPress={this.toggle}
              testID='toggleMenu'
              style={styles.remoteController}
            >
              toggleMenu
            </Text>

          </View>
          <TouchableOpacity
            onPress={this.toggle}
            style={styles.button}
          >
            <Image
              source={menuImage}
              style={{ width: 32, height: 32 }}
            />
          </TouchableOpacity>
        </SideMenu>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  remoteController: {
    backgroundColor: '#F5FCFF'
  },
  dropZone: {
    backgroundColor: '#00334d',
    marginTop: 'auto',
    width: 50,
    height: 50
  },
  text: {
    marginTop: 25,
    marginLeft: 5,
    marginRight: 5,
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  },
  button: {
    position: 'absolute',
    top: 20,
    padding: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
})

const menuImage = require('../assets/menu.png')
const trashBinImage = require('../assets/trash-bin.png')

