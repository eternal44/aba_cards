import { combineReducers } from 'redux'
import DraggablesReducer from './DraggablesReducer'
import SelectableImagesReducer from './SelectableImagesReducer'
import MenuReducer from './MenuReducer'

export default combineReducers({
  draggables: DraggablesReducer,
  selectableImages: SelectableImagesReducer,
  menuState: MenuReducer
})
