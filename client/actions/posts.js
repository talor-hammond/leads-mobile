import request from 'superagent'

// String variables:
export const GET_POSTS = 'GET_POSTS'
export const ADD_POST = 'ADD_POST'
export const GET_POST_BY_POST_ID = 'GET_POST_BY_POST_ID'
export const GET_POSTS_BY_USER_ID = 'GET_POSTS_BY_USER_ID'

const baseURL = "https://jumperlead.herokuapp.com/api/posts"

// Synchronous; client-side actions
export function getPosts(posts) {
    return {
        type: GET_POSTS, // action.type
        posts // action.posts
    }
}

export function addPost(post) {
    return {
        type: ADD_POST, // action.type
        post // action.post
    }
}

export function getPostByPostId(post) {
    return {
        type: GET_POST_BY_POST_ID,
        post
    }
}

export function getPostsByUserId(posts) {
    return {
        type: GET_POSTS_BY_USER_ID,
        posts
    }
}

// Asynchronous; server-side actions; redux-thunk

// getting posts w user information:
export function getPostsRequest() {
    return dispatch => {
        request
        .get(baseURL)
        .then(res => { // wait for our request to the server to finish...
            const posts = res.body 
            dispatch(getPosts(posts)) // ...then make a change client-side.
        }) 
        .catch(err => {
            if (err) {
                console.log(err)
            }
        })
    }
}

// adding a new post:
export function addPostRequest(post) {
    return dispatch => {
        request
        .post(baseURL)
        .send(post)
        .then(() => {
            dispatch(getPostsRequest()) // this post here is the one fed in
        })
        .catch(err => {
            if (err) {
                console.log(err)
            }
        })
    }
}

// getting a post object by the post's id:
export function getPostByPostIdRequest(id) {
    return dispatch => {
        request
            .get(baseURL + '/post/' + id)
            .then(res => {
                const post = res.body
                dispatch(getPostByPostId(post))
            })
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }
}

export function getPostsByUserIdRequest(id) {
    return dispatch => {
        request
            .get(baseURL + '/user/' + id)
            .then(res => {
                const posts = res.body
                dispatch(getPostsByUserId(posts))
            })
            .catch(err => {
                if (err) {
                    console.log(err)
                }
            })
    }
}


