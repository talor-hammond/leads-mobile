// Configuration of our TabNavigator:
import React from 'react'

// Navigator imports:
import {
    createSwitchNavigator,
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation'

// Tabs:
import Home from '../tabs/Home'
import MapView from '../tabs/MapView'
import AddPost from '../tabs/AddPost'
import Messages from '../tabs/Messages'
import Profile from '../tabs/Profile'

// Login stack:
import Login from '../../components/signUp/Login'
import Register from '../../components/signUp/Register'

// Tab navigator
export const MainTabs = createBottomTabNavigator({
    Home: {
        screen: Home
    },
    MapView: {
        screen: MapView
    },
    AddPost: {
        screen: AddPost
    },
    Messages: {
        screen: Messages
    },
    Profile: {
        screen: Profile
    }
}, {
        swipeEnabled: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#f2f2f2',
            activeBackgroundColor: '#2EC4B6',
            inactiveTintColor: '#666',
            labelStyle: {
                fontSize: 12,
                padding: 12
            }
        }
    })

// StackNavigator for our Login screens:
export const LoginStack = createStackNavigator({
    Login: {
        screen: Login
    },
    Register: {
        screen: Register
    },
    MainTabs: {
        screen: MainTabs
    }
        // initialRouteName: "Login" if logged out: otherwise go to MainTabs
})

// TODO: Switch navigator which either goes to our LoginStack if logged out, or MainTabs if logged inMain app navigator (switch)
// export const