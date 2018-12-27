import {
  ADD_DRAGGABLE,
  REMOVE_DRAGGABLE,
  REMOVE_ALL_DRAGGABLES
} from '../actions/types'

const INIT_STATE = []

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case ADD_DRAGGABLE:
      const newDraggable = action.payload
      const epochTimeStamp = Math.random().toString(36).slice(2)
      const constructedDraggable = {...newDraggable, ...{id: epochTimeStamp}}

      return [...state, constructedDraggable]

    case REMOVE_DRAGGABLE:
      const draggableId = action.payload
      const index = state.findIndex(({id}) => {
        return id === draggableId
      })

      return [...state.slice(0, index), ...state.slice(index + 1)]

    case REMOVE_ALL_DRAGGABLES:
      return INIT_STATE

    default:
      return state
  }
}
