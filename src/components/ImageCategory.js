import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectCategory } from '../actions'
import { View, Text, StyleSheet } from 'react-native'

class ImageCategory extends Component {
  render () {
    const category = this.props.category

    return (
      <View style={{ width: '20%', alignItems: 'center' }}>
        <Text style={styles}
          onPress={() => {
            this.props.onSelectCategory(category)
          }}
        >
          { category }
        </Text>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectCategory: (category) => dispatch(selectCategory(category))
  }
}

const styles = StyleSheet.create({
  fontSize: 20
})

export default connect(null, mapDispatchToProps)(ImageCategory)
