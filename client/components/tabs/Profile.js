import React, { Component } from 'react'

import { connect } from 'react-redux'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native'

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'
import { getPostsRequest } from '../../actions/posts'
import CardComponent from './homeComponents/CardComponent'
import Login from '../SignUp/Login'
import UserPost from './ProfileComponents/UserPost'

class Profile extends Component {
    render() {
        const { username, topic, title, description, address, lat, long } = this.props // need an address!
        console.log(this.props)
        const { dispatch } = this.props

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Left>
                        <Thumbnail source={require('../../assets/scott.png')} />
                    </Left>
                </View>
                {/* <Card style={styles.cardContainer}>
                    <CardItem style={styles.cardItem}>
                        <Left>
                            <Thumbnail source={require('../../assets/scott.png')} />
                            <Text> Michael Scott{"\n"} Branch Manager</Text>
                            {/* <Text>Branch Manager</Text> */}
                        {/* </Left>
                        <Right> */}
                            {/* <TouchableOpacity onPress={() => navigation.navigate('No Where Ye3t!')} style={styles.settingsButtons}> */}

                                {/* <Icon name="ios-chatbubbles"
                                    style={{ color: 'white', left: 100 }} /> */}
                                {/* <Text style={styles.buttonText}>Settings</Text>

                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.profileButtons}>
                                <Text style={styles.buttonText}>Logout </Text>
                            </TouchableOpacity> */} */}

                        {/* </Right> */}
                    {/* </CardItem>
                </Card> */}
                <View style={styles.postHeader}>
                    <Text style={styles.pHeaderText}>User's Posts</Text>
                </View >
                <View style={styles.cards}>
                    <ScrollView>
                        <UserPost />
                        <UserPost />
                        <UserPost />
                        <UserPost />
                        <UserPost />
                        <UserPost />
                    </ScrollView>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
    },
    cardContainer: {
        backgroundColor: 'blue',
        margin: 0
    },
    cardItem: {
        backgroundColor: 'green',
        height: 150,
        margin: 0
    },
    profileButtons: {
        width: 100,
        backgroundColor: 'pink',
        padding: 10,
        borderRadius: 9001,
        justifyContent: 'center',

    },
    settingsButtons: {
        width: 100,
        marginBottom: 12,
        backgroundColor: 'pink',
        padding: 10,
        borderRadius: 9001
    },
    buttonText: {
        textAlign: 'center'
    },
    postHeader: {
        flex: 1,
        height: 40,
        backgroundColor: 'orange',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    cards: {
        flex: 8,
    },
    header: {
        flex: 3
    }

})

export default connect()(Profile)