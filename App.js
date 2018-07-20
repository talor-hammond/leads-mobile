import React from 'react';

// Components:
import Login from './client/components/signUp/Login.js'
import Register from './client/components/signUp/Register'

// Testing TabNavigator is working...
import { MainTabs, LoginStack } from './client/components/config/navigation'

export default class App extends React.Component {
  render() {
    return (
      <LoginStack />
      // <Login />
      // <Register />
    )
  }
}