import { combineReducers } from 'redux'
import DraggablesReducer from './DraggablesReducer'
import SelectablesReducer from './SelectablesReducer'

export default combineReducers({
  draggables: DraggablesReducer,
  selectables: SelectablesReducer
})
