import {
  ADD_DRAGGABLE,
  REMOVE_DRAGGABLE,
  REMOVE_ALL_DRAGGABLES
} from './types'

export const addDraggable = (draggable) => {
  return {
    type: ADD_DRAGGABLE,
    payload: draggable
  }
}

export const removeDraggable = (draggable) => {
  return {
    type: REMOVE_DRAGGABLE,
    payload: draggable
  }
}

export const removeAllDraggables = () => {
  return {
    type: REMOVE_ALL_DRAGGABLES
  }
}

