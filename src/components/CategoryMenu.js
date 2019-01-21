import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text
} from 'react-native'

import ImageCategory from './ImageCategory'

class CategoryMenu extends Component {

  generateID () {
    return Math.random().toString(36).slice(2)
  }

  render () {
    const categories = this.props.categories

    return (
      <ScrollView scrollsToTop={false} style={styles.menu}>
        {categories.map((category, index) =>
          <ImageCategory
            category={category}
            key={index}
          />
        )}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  menu: {
    backgroundColor: 'blue',
    paddingTop: 50,
    width: 500,
  },
})

const mapStateToProps = state => {
  return { categories: Object.keys(state.selectableImages) }
}

export default connect(mapStateToProps)(CategoryMenu)
