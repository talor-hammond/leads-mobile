import { GET_COMMENTS, ADD_COMMENT } from '../actions/comments'

export default function posts(state = [], action) {
  let newState = [...state]

  switch (action.type) {
    case GET_COMMENTS:
      return [...action.comments]
    case ADD_COMMENT:
      return [...newState, action.comment]
    default:
      return state
  }
}