import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text
} from 'react-native'

import Selectable from './Selectable'

class Menu extends Component {

  generateID () {
    return Math.random().toString(36).slice(2)
  }

  render () {
    const selectables = this.props.selectables

    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{ uri }}
          />
          <Text style={styles.name}>Eunice Shin</Text>
        </View>

        {selectables.map((selectable, index) =>
          <Selectable
            selectable={selectable}
            key={index}
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
  return { selectables: state.selectables }
}

export default connect(mapStateToProps)(Menu)
