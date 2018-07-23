// // const localStorage = global.window.localStorage // NOTE: ???????; ASYNC STORAGE???????
import { AsyncStorage } from 'react-native'

// export async function get (key) {
//   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJ0YXl0YXkiLCJpYXQiOjE1MzIyOTg3NDYsImV4cCI6MTUzMjM4NTE0Nn0.h2ofNzffbeuugnIILSSRLX4Y-VyXAJvIfhkP4DgCQ7E"

//   // return AsyncStorage.getItem(key)
//   set('token', token).then(() => console.log('saved'))
//   // return token
// }

// export async function set (key, value) {
//   if(value === null) {
//     // localStorage.removeItem(key)
//     AsyncStorage.removeItem(key)
//   } else {
//     // localStorage.setItem(key, value)
//     AsyncStorage.setItem(key, value)
//   }
// }

export async function get (key) {
  // return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJ0YXl0YXkiLCJpYXQiOjE1MzIyOTg3NDYsImV4cCI6MTUzMjM4NTE0Nn0.h2ofNzffbeuugnIILSSRLX4Y-VyXAJvIfhkP4DgCQ7E"

  try {
    const value = await AsyncStorage.getItem(key);
    return value

    // if (value != null) {
      // console.log(value)
    // }
  } catch (error) {
    //Error retrieving data
    return null
  }
}

export async function set (key, value) {
  try {
    console.log('set')
    await AsyncStorage.setItem(key, value)
    console.log('setted')
    return value
  } catch (error) {
    //Error saving data
  }
}