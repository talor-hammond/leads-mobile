import React from 'react';

// Components:
import Login from './client/components/signUp/Login.js'

// Testing TabNavigator is working...
import { Tab } from './client/components/config/navigation'

export default class App extends React.Component {
  render() {
    return (
      <Login />
    )
  }
}

// const Tabs = TabNavigator({ // Stack of tabs here:
//   Home: {
//     screen: Home
//   },
//   MapView: {
//     screen: MapView
//   },
//   AddPost: {
//     screen: AddPost
//   },
//   Messages: {
//     screen: Messages
//   },
//   Profile: {
//     screen: Profile
//   }
// }, {
//     tabBarPosition: 'bottom',
//     swipeEnabled: true,
//     tabBarOptions: {
//       activeTintColor: '#f2f2f2',
//       activeBackgroundColor: '#2EC4B6',
//       inactiveTintColor: '#666',
//       labelStyle: {
//         fontSize: 22,
//         padding: 12
//       }
//     }
//   })

// Our stack navigator which has a route to our 'Tabs'
// const MyApp = StackNavigator({
//   TestComp1: { screen: TestComp1 },
//   TestComp2: { screen: TestComp2 },
//   Tabs: {
//     screen: Tabs
//   }
// }, {
//     initialRouteName: "Tabs" // TODO: initial route should be landing page
//   });