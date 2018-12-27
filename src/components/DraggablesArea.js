import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  Dimensions,
  Button,
  View
} from 'react-native'
import Draggable from './Draggable'

import { removeAllDraggables } from '../actions'

class DraggablesArea extends PureComponent {
  render () {
    const {
      draggables,
      onRenderDraggable
    } = this.props

    return (
      <View>
        <View style={styles.topContainer}>
          <View style={styles.clearAllButton}>
            <Button
              title='Clear All'
              onPress={() => {
                this.props.onRemoveAll()
              }}
            />
          </View>
        </View>

        <View style={styles.container}>

          {draggables.map((draggable) =>
            <Draggable
              key={draggable.id}
              id={draggable.id}
              draggable={draggable}
              onRender={onRenderDraggable}
              deleteZoneBorder={deleteZoneBorder}
            />
          )}
        </View>
      </View>
    )
  }
}

const height = Dimensions.get('window').height - 50
const width = Dimensions.get('window').width - 50
const deleteZoneBorder = { height, width }

const mapDispatchToProps = (dispatch) => {
  return {
    onRemoveAll: () => dispatch(removeAllDraggables())
  }
}

const styles = {
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderColor: 'rgba(255,255,255,0.5)',
    borderRadius: 5,
    borderWidth: 2,
    paddingBottom: 10,
    paddingHorizontal: 15,
    paddingTop: 15
  },
  add: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    paddingHorizontal: 5,
    paddingVertical: 5,
    textDecorationLine: 'underline'
  },
  topContainer: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  clearAllButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 20
  }
}

export default connect(null, mapDispatchToProps)(DraggablesArea)
