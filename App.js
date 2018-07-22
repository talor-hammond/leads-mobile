import React from 'react';

// Redux /  react-redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import reducers from './client/reducers/index'

// Our root component; 'switches' on auth state?
import { createRootNavigator } from './client/components/config/navigation'

let store = createStore(reducers, compose( // global object, which stores our different types of state.
  applyMiddleware(thunkMiddleware)
))

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      signedIn: false // tracking whether a user is signedIn; defaults to false
    }
  }

  render() {
    const { signedIn } = this.state // pulling from state...
    const App = createRootNavigator(signedIn)

    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}