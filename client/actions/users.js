import request from 'superagent'

export const GET_USER = 'GET_USER'

const baseURL = "https://jumperlead.herokuapp.com/api/user/"

// client side action
export function getUser(user) {
    return {
        type: GET_USER,
        user
    }
}

// server side action
export function getUserRequest(user_name) {
    return dispatch => {
        request
        .get(baseURL + user_name) // gets the user object we want depending on the user_name
        .then(res => {
            const user = res.body // grabbing our user object
            dispatch(getUser(user)) // dispatching the client-side action with the user object
        })
        .catch(err => {
            if (err) {
                console.log(err)
            }
        })
    }
}