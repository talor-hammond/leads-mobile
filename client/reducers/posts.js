import { GET_POSTS, ADD_POST, GET_POST_BY_POST_ID, GET_POSTS_BY_USER_ID } from '../actions/posts'

export default function posts(state = [], action) {
    let newState = [...state]

    switch (action.type) {
        case GET_POSTS:
            return [...action.posts]
        case ADD_POST:
            return [...newState, action.post] // spread everything out from our current state, as well as our added post into an array   
        case GET_POST_BY_POST_ID:
            return [...action.post]
        case GET_POSTS_BY_USER_ID:
            return [...action.posts]
        default:
            return state
    }
}