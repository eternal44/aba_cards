import React, { Component } from 'react'
import { connect } from 'react-redux'
import {View, PanResponder, Animated} from 'react-native'
import { removeDraggable } from '../actions'

class Draggable extends Component {
  constructor (props) {
    super(props)

    this.state = {
      scale: 1,
      lastScale: 1,
      offsetX: 0,
      offsetY: 0,
      lastX: 0,
      lastY: 0,
      lastMovePinch: false,
      dropAreaValues: null,
      pan: new Animated.ValueXY(),
      opacity: new Animated.Value(1),
      draggableIndex: this.props.draggable.index,
      distant: 150
    }
    this.distant = 150
  }

  componentWillMount () {
    this._val = { x: 0, y: 0 }
    this.state.pan.addListener((value) => (this._val = value))

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gesture) => true,
      onPanResponderGrant: (e, gesture) => {
        this.state.pan.setOffset({
          x: this._val.x,
          y: this._val.y
        })

        this.state.pan.setValue({x: 0, y: 0})

        if (gesture.numberActiveTouches === 2) {
          let dx = Math.abs(e.nativeEvent.touches[0].pageX - e.nativeEvent.touches[1].pageX)
          let dy = Math.abs(e.nativeEvent.touches[0].pageY - e.nativeEvent.touches[1].pageY)
          let distant = Math.sqrt(dx * dx + dy * dy)
          this.setState({ distant: distant })
        }
      },
      onPanResponderMove: Animated.event([
        null,
        { dx: this.state.pan.x, dy: this.state.pan.y }],
        { listener: (e, gesture) => {
          // zoom
          if (gesture.numberActiveTouches === 2) {
            let dx = Math.abs(e.nativeEvent.touches[0].pageX - e.nativeEvent.touches[1].pageX)
            let dy = Math.abs(e.nativeEvent.touches[0].pageY - e.nativeEvent.touches[1].pageY)
            let distant = Math.sqrt(dx * dx + dy * dy)
            let scale = distant / this.state.distant * this.state.lastScale
            this.setState({ scale, lastMovePinch: true })
          }
        } }
      ),
      onPanResponderRelease: (e, gesture) => {
        if (this.isDropArea(gesture)) {
          Animated.timing(this.state.opacity, {
            toValue: 0,
            duration: 1000
          }).start(() =>
            this.onRemove()
          )
        }

        this.setState({
          lastX: this.state.offsetX,
          lastY: this.state.offsetY,
          lastScale: this.state.scale
        })
      }
    })
  }

  onRemove () {
    const {removeDraggable, id} = this.props

    removeDraggable(id)
  }

  isDropArea ({moveY, moveX}) {
    const {height, width} = this.props.deleteZoneBorder

    return moveY > height && moveX < width
  }

  render () {
    return (
      <View style={{ width: '20%', alignItems: 'center' }}>
        {this.renderDraggable()}
      </View>
    )
  }

  renderDraggable () {
    const { pan, scale } = this.state
    const transformParams = [
      {scaleX: scale},
      {scaleY: scale},
      {translateX: this.state.offsetX},
      {translateY: this.state.offsetY}
    ].concat(pan.getTranslateTransform())

    const panStyle = {
      transform: transformParams
    }

    const draggableURI = this.props.draggable.uri

    return (
      <Animated.Image
        {...this.panResponder.panHandlers}
        style={[panStyle, {
          opacity: this.state.opacity,
          width: 60,
          height: 60
        }]}
        source={{uri: draggableURI}}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeDraggable: (draggable) => dispatch(removeDraggable(draggable))
  }
}

export default connect(null, mapDispatchToProps)(Draggable)
