import { createStore, combineReducers } from 'redux'

import reducers from './reducers'

export default () => {
  const store = createStore(
    combineReducers({
      ...reducers
    })
  )

  return store
}
