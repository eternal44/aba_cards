import {
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCESS,
  FETCH_IMAGES_FAILURE,
  FETCH_IMAGES_RESPONSE
} from './types'

import {getAllFiles} from '../../lib/fetch_files'

export const requestImages = () => {
  return {
    type: REQUEST_IMAGES
  }
}

export const receiveImages = (images) {
  // [
  //   {
  //     category: 'aba-animals',
  //     files: [ [Object], [Object], [Object], [Object] ]
  //   },
  //   { category: 'aba-foods', files: [ [Object], [Object], [Object] ] },
  //   {
  //     category: 'aba-vehichles',
  //     files: [ [Object], [Object], [Object] ]
  //   }
  // ]

  return {
    type: RECEIVE_IMAGES,
    categories: ['animals', 'birds'] // TODO: parse later
  }
}

export const fetchImages = () => {
  return function(dispatch) {
    dispatch(requestImages())

    return async () => {
      const result = await (getAllFiles(storage))

      dispatch(receiveImages(result))
    }
  }
}

