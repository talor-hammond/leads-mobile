import {combineReducers} from 'redux'

import auth from './auth'
import posts from './posts'
import comments from './comments'
import users from './users'

export default combineReducers({
  auth,
  posts,
  comments,
  users
})