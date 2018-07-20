import React from 'react';

// Components:
import Login from './client/components/signUp/Login.js'
import Register from './client/components/signUp/Register'

import { MainTabs, LoginStack, createRootNavigator } from './client/components/config/navigation'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      signedIn: false // tracking whether a user is signedIn; defaults to false
    }
  }

  render() {
    const { signedIn } = this.state // pulling from state...
    const Layout = createRootNavigator(signedIn)

    return <Layout />
  }
}