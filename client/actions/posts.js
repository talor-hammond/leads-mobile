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
        console.log('Firing async...')
        request
        .get(baseURL)
        .then(res => { // wait for our request to the server to finish...
            console.log('Server response-body: ', res.body)
            const posts = res.body 
            dispatch(getPosts(posts)) // ...then make a change client-side.
            console.log('Firing client-side...')
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


