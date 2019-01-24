import React, { Component } from 'react'
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text
} from 'react-native'
import { connect } from 'react-redux'
import SelectableImage from './SelectableImage'

class ImageMenu extends Component {

  generateID () {
    return Math.random().toString(36).slice(2)
  }

  render () {
    const selectableImages = this.props.selectableImages

    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        {selectableImages.map((image) =>
          <SelectableImage
            image={image}
            key={this.generatID}
          />
        )}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: 'gray',
    padding: 20,
    paddingTop: 80
  },
  name: {
    position: 'absolute',
    left: 70,
    top: 20
  }
})

const mapStateToProps = state => {
  menuState = state.menuState

  const selectableImages = menuState.length == 0 ? [] : state.selectableImages[menuState]
  return { selectableImages: selectableImages }
}

export default connect(mapStateToProps)(ImageMenu)
