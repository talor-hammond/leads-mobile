// Configuration of our TabNavigator:
import React from 'react'

// Navigator imports:
import {
    createSwitchNavigator,
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation'

// Icons import:
import Icon from 'react-native-vector-icons/Ionicons'

// Tabs:
import Home from '../tabs/Home'
import MapView from '../tabs/MapView'
import AddPost from '../tabs/AddPost'
import Messages from '../tabs/Messages'
import Profile from '../tabs/Profile'

// Login stack:
import Login from '../../components/signUp/Login'
import Register from '../../components/signUp/Register'

// StackNavigator for our Login screens:
export const LoginStack = createStackNavigator({
    Login: {
        screen: Login
    },
    Register: {
        screen: Register
    },
    MainTabs: { // Our main tabs; TabNavigator
        screen: createBottomTabNavigator({
            Home: {
                screen: Home,
                navigationOptions: {
                    toBeLabel: 'Home',
                    tabBarLabel: ({tintColor}) => ( // TODO: Sort tint-color?
                        <Icon name='ios-home' size={40} />
                    )
                }
            },
            MapView: {
                screen: MapView,
                navigationOptions: {
                    toBeLabel: 'MapView',
                    tabBarLabel: ({tintColor}) => (
                        <Icon name='ios-map' size={40} />
                    )
                }
            },
            // AddPost: {
            //     screen: AddPost,
            //     navigationOptions: {
            //         toBeLabel: 'AddPost',
            //         tabBarLabel: ({tintColor}) => (
            //             <Icon name='ios-add-circle-outline' size={24} />
            //         )
            //     }
            // },
            Messages: {
                screen: Messages,
                navigationOptions: {
                    toBeLabel: 'Messages',
                    tabBarLabel: ({tintColor}) => (
                        <Icon name='ios-send' size={40} />
                    )
                }
            },
            Profile: {
                screen: Profile,
                navigationOptions: {
                    toBeLabel: 'Profile',
                    tabBarLabel: ({tintColor}) => (
                        <Icon name='ios-person' size={40} />
                    )
                }
            }
        },
            {
                navigationOptions: ({ navigation }) => ({ // Options for the navbar, header, etc.:
                    
                }),
                tabBarOptions: {
                    swipeEnabled: true,
                    activeTintColor: 'grey', // Not working?
                    activeBackgroundColor: '#666', // Working!
                    inactiveTintColor: 'black', // Not working either?
                    inactiveBackgroundColor: '#999' // Working!
                    // labelStyle: {
                    //     fontSize: 12,
                    //     padding: 12
                    // }
                }
            })
    }
    // initialRouteName: "Login" if logged out: otherwise go to MainTabs
})

// TODO: Switch navigator which either goes to our LoginStack if logged out, or MainTabs if logged inMain app navigator (switch)
// export const