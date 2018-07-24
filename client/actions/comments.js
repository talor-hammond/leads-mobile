import request from 'superagent'

// String variables
export const GET_COMMENTS = 'GET_COMMENTS'
export const ADD_COMMENT = 'ADD_COMMENT'

const baseURL = "https://jumperlead.herokuapp.com/api/comments/comment/"

//Synchronous; client-side actions
export function getComments (comments) {
  return {
    type: GET_COMMENTS, //action.type
    comments //action.comments
  }
}

export function addComment (comment) {
  return {
    type: ADD_COMMENT,
    comment
  }
}
// Asynchronous; server-side actions; redux-thunk
export function getCommentsRequest (postId) {
  return dispatch => {
    request
    .get(baseURL + postId)
    .then(res => {
      const comments = res.body
      dispatch(getComments(comments))
    })
  }
}

export function addCommentRequest (comment) {
  return dispatch => {
    request // server-side...
      .post(baseURL) // TODO: remove :id from web-api!!!
      .send(comment)
      .then(() => {
        dispatch(addComment(comment)) // client-side dispatch...
      })
  }
}