import {ADD_DATA} from '../constants/action-types'
const initialState = [];
const addData = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return [
        ...action.data
      ]
    default:
      return state
  }
}

export default addData