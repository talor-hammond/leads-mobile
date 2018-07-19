import React from 'react';

// Components:
import Login from './client/components/signUp/Login.js'

// Testing TabNavigator is working...
import { MainTabs, LoginStack } from './client/components/config/navigation'

export default class App extends React.Component {
  render() {
    return (
      <LoginStack />
    )
  }
}