import request from 'superagent'

// String variables:
export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'

const baseURL = "https://jumperlead.herokuapp.com/api/posts"

// Synchronous; client-side actions
export function getPosts (posts) {
    return {
        type: GET_POSTS, // action.type
        posts // action.posts
    }
}

export function addPost (post) {
    return {
        type: ADD_POST, // action.type
        post // action.post
    }
}

// Asynchronous; server-side actions; redux-thunk
export function getPostsRequest () {
    return dispatch => {
        request
        .get(baseURL)
        .then(res => { // wait for our request to the server to finish...
            const posts = res.body 
            dispatch(getPosts(posts)) // ...then make a change client-side.
        }) 
    }
}

export function addPostRequest (post) {
    return dispatch => {
        request
        .post(baseURL)
        .send(post)
        .then(() => {
            dispatch(addPost(post))
        })
    }
}


