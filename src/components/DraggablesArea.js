import React, { PureComponent } from 'react';
import {
  Text,
  View
} from 'react-native';
import Draggable from './Draggable';

export default class DraggableArea extends PureComponent {
  render() {
    const {
      draggables,
      onPress,
      onRenderDraggable,
    } = this.props;

    return (
      <View style={styles.container}>

        {draggables.map(draggable =>
          <Draggable
            key={draggable.title}
            draggable={draggable}
            onPress={onPress}
            onRender={onRenderDraggable}
          />
        )}
      </View
      >
    );
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
    paddingTop: 15,
  },
  add: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    paddingHorizontal: 5,
    paddingVertical: 5,
    textDecorationLine: 'underline',
  },
};
