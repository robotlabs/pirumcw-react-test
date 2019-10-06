const initialState = {};
const test = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST':
      return state
    default:
      return state
  }
}

export default test