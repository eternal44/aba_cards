import React, { Component } from "react"
import SideMenu from 'react-native-side-menu';
import {
  StyleSheet,
  View,
  Text,
  PanResponder,
  Animated,
  TouchableOpacity,
  Image
} from "react-native"

import Draggable from './components/Draggable'
import Draggables from './components/Draggables'
import Menu from './components/Menu';

const DRAGGABLES = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6'
]

const image = require('./assets/menu.png');
const styles = StyleSheet.create({
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
  },
  button: {
    position: 'absolute',
    top: 20,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      selectedItem: 'About',
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item,
    });

  render() {
    const menu = <Menu />;

    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        <View style={styles.container}>
          <Draggables
            ref={draggable => this._draggablesComponent = draggable }
            draggables={DRAGGABLES}
          />
          <View style={styles.dropZone}>
            <Text style={styles.text}>Drop here to remove!</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={this.toggle}
          style={styles.button}
        >
          <Image
            source={image}
            style={{ width: 32, height: 32 }}
          />
        </TouchableOpacity>
      </SideMenu>
    )
  }
}
