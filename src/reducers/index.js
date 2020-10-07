import data from "./data"
import {combineReducers} from 'redux';

const allReducers=combineReducers({
  data:data,
})
export default allReducers