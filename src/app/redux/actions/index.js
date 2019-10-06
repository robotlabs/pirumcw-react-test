import {ADD_DATA} from '../constants/action-types'
export const addData = data => ({
  type: ADD_DATA,
  id: Math.random(),
  data
})
