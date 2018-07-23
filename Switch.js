import React from 'react';

// Redux /  react-redux
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers from './client/reducers/index'

// Our root component; 'switches' on auth state?
import { createRootNavigator } from './client/components/config/navigation'

// auth / utils:
import { isAuthenticated } from './client/utils/auth'
import { checkUserToken } from './client/actions/login'

let store = createStore(reducers, compose( // global object, which stores our different types of state.
  applyMiddleware(thunkMiddleware)
))

class Switch extends React.Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   signedIn: false // tracking whether a user is signedIn; defaults to false
    // }
  }

  componentDidMount() { // check if valid token stored when user launches app
    // this.setState({
    //   signedIn: isAuthenticated()
    // })
    this.props.dispatch(checkUserToken())
  }

  render() {
    console.log(this.props.auth)
    const authenticated = this.props.auth.isAuthenticated

    const Layout = createRootNavigator(authenticated)
    // const Layout = createRootNavigator(this.props.auth.isAuthenticated())


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