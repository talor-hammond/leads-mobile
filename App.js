import React from 'react';

import { createRootNavigator } from './client/components/config/navigation'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      signedIn: true // tracking whether a user is signedIn; defaults to false
    }
  }

  render() {
    const { signedIn } = this.state // pulling from state...
    const Layout = createRootNavigator(signedIn)

    return <Layout />
  }
}