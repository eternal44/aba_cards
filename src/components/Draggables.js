import React, { PureComponent } from 'react'
import {
  View
} from 'react-native'
import { connect } from 'react-redux'
import DraggablesArea from './DraggablesArea'

class Draggables extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      dndEnabled: true
    }
  }

  updateDraggableState (draggable, props) {
    this.setState((state) => {
      const index = state.draggables.findIndex(({ id }) => id === draggable.id)

      return {
        draggables: [
          ...state.draggable.slice(0, index),
          {
            ...state.draggable[index],
            ...props
          },
          ...state.draggable.slice(index + 1)
        ]
      }
    })
  }

  onRenderDraggable (draggable, screenX, screenY, width, height) {
    this.updateDraggableState(draggable, {
      tlX: screenX,
      tlY: screenY,
      brX: screenX + width,
      brY: screenY + height
    })
  }

  render () {
    const { draggables } = this.props

    return (
      <View>
        <DraggablesArea
          draggables={draggables}
          onRenderDraggable={this.onRenderDraggable}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return { draggables: state.draggables }
}

export default connect(mapStateToProps)(Draggables)
