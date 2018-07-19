// Configuration of our TabNavigator:
import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'

import Home from '../tabs/Home'
import MapView from '../tabs/MapView'
import AddPost from '../tabs/AddPost'
import Messages from '../tabs/Messages'
import Profile from '../tabs/Profile'

export const Tab = createBottomTabNavigator({
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
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: '#f2f2f2',
        activeBackgroundColor: '#2EC4B6',
        inactiveTintColor: '#666',
        labelStyle: {
            fontSize: 22,
            padding: 12
        }
    }
})
