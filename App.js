import React from 'react';

// Redux /  react-redux
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import Profile from './client/components/tabs/Profile'
import reducers from './client/reducers/index'

// Our root component; 'switches' on auth state?
import Switch from './Switch'

let store = createStore(reducers, compose( // global object, which stores our different types of state.
  applyMiddleware(thunkMiddleware)
))

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Switch />
      </Provider>
    )
  }
}

// export default connect()(App)
export default App