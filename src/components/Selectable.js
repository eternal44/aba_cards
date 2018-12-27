import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native'

import { addDraggable } from '../actions'

class Selectable extends Component {
  render () {
    const draggableToAdd = this.props.selectable

    return (
      <View>
        <TouchableOpacity onPress={() => {
          this.props.onAdd(draggableToAdd)
        }}>
          <Image
            source={{uri: draggableToAdd.uri}}
            style={styles.thumbnail}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (newDraggable) => dispatch(addDraggable(newDraggable))
  }
}

const styles = StyleSheet.create({
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5
  },
  thumbnail: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1
  }
})

export default connect(null, mapDispatchToProps)(Selectable)
