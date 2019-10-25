import { combineReducers } from 'redux'
import month from './month'
import plans from './plans'
import editing from './editing'

export default combineReducers({
  month,
  editing,
})
