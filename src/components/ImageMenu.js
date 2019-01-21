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
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{ uri }}
          />
          <Text style={styles.name}>Eunice Shin</Text>
        </View>

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

const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png'

const styles = StyleSheet.create({
  menu: {
    backgroundColor: 'gray',
    padding: 20
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1
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
