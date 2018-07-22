// import { removeUser } from '../utils/auth'

// function requestLogout () {
//   return {
//     type: 'LOGOUT_REQUEST',
//     isFetching: true,
//     isAuthenticated: true
//   }
// }

// function receiveLogout () {
//   return {
//     type: 'LOGOUT_SUCCESS',
//     isFetching: false,
//     isAuthenticated: false
//   }
// }

// // Logs the user out
// export function logoutUser () {
//   return dispatch => {
//     // document.location = "/#/" // ASYNC1
//     dispatch(requestLogout())
//     removeUser()
//     dispatch(receiveLogout())
//   }
// } 