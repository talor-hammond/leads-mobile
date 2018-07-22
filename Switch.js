import React from 'react';

// Redux /  react-redux
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers from './client/reducers/index'

// Our root component; 'switches' on auth state?
import { createRootNavigator } from './client/components/config/navigation'

let store = createStore(reducers, compose( // global object, which stores our different types of state.
  applyMiddleware(thunkMiddleware)
))

class Switch extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      signedIn: false // tracking whether a user is signedIn; defaults to false
    }
  }

  render() {
    const { signedIn } = this.state // pulling from state...
    const Layout = createRootNavigator(signedIn)

    return (
        <Layout />
    )
  }
}

const mapStateToProps = ({ auth }) => {
    console.log(auth)

    return {
        auth
    }
}

export default connect(mapStateToProps)(Switch)