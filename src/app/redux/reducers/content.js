import {ADD_DATA, TOGGLE_ALBUM} from '../constants/action-types'
const initialState = [];
const addData = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return [
        ...action.data
      ]
    case TOGGLE_ALBUM:
      return state.map(album => {
          return album.id === action.id ? { ...album, opened: !album.opened } : album
        })
    default:
      return state
  }
}

export default addData