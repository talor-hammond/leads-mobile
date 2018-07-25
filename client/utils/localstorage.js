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

export async function get(key) {
  return AsyncStorage.getItem(key)
}

export async function set(key, value) {
  // return new Promise((resolve, reject) => {
  //   try {
  //     console.log('set')
  //     if(value) {
  //       await AsyncStorage.setItem(key, value)
  //     } else {
  //       await AsyncStorage.removeItem(key)
  //     }
  //     resolve()
  //     console.log('setted')
  //     return value
  //   } catch (error) {
  //     reject('error setting to storage')
  //     //Error saving data
  //   }

  if (value) {
    return AsyncStorage.setItem(key, value) // you can use await, or 'return' if the method returns something
  } else {
    return AsyncStorage.removeItem(key)
  }

}