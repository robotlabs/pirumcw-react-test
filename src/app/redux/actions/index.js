import {ADD_DATA, TOGGLE_ALBUM} from '../constants/action-types'
export const addData = data => ({
  type: ADD_DATA,
  id: Math.random(),
  data
})
export const toggleAlbum = (id) => ({
  type: TOGGLE_ALBUM,
  id: id
})
