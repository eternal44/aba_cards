import {
  SELECT_CATEGORY
} from '../actions/types'

const INIT_STATE = ''

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      const category = action.payload

      return category
    default:
      return state
  }
}
