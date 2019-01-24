import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native'
import SideMenu from 'react-native-side-menu'

import Draggables from './Draggables'
import ImageMenu from './ImageMenu'
import CategoryMenu from './CategoryMenu'

class Main extends Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)

    this.state = {
      categoryMenuIsOpen: false,
    }
  }

  toggle () {
    this.setState({
      categoryMenuIsOpen: !this.state.categoryMenuIsOpen
    })
  }

  updateCategoryMenuState (categoryMenuIsOpen) {
    this.setState({ categoryMenuIsOpen })
  }

  render () {
    const imageMenu = <ImageMenu />
    const categoryMenu = <CategoryMenu />

      return (
        <View style={ styles.container }>
          <SideMenu
            menu={categoryMenu}
            isOpen={this.state.categoryMenuIsOpen}
            onChange={isOpen => this.updateCategoryMenuState(isOpen)}
            openMenuOffset={175}
          >
            <View style= {styles.container}>
              <SideMenu
                menu={imageMenu}
                isOpen={this.props.openImageMenu}
                onChange={isOpen => false}
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

            <Text
              onPress={this.toggle}
              testID='toggleMenu'
              style={styles.remoteController}
            >
              toggleMenu
            </Text>
          </SideMenu>
        </View>
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

const mapStateToProps = state => {
  menuState = state.menuState

  const openImageMenu = menuState.length == 0 ? false : true
  return { openImageMenu: openImageMenu }
}

export default connect(mapStateToProps)(Main)
