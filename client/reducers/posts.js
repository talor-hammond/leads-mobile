import { GET_POSTS, ADD_POST } from '../actions/posts'

export default function posts(state = [], action) {
    console.log(action)

    let newState = [...state]

    switch (action.type) {
        case GET_POSTS:
            return [...action.posts]
        case ADD_POST:
            return [...newState, action.post] // spread everything out from our current state, as well as our added post into an array   
        default:
            return state
    }
}