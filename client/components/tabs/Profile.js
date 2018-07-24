import React, { Component } from 'react'

import { connect } from 'react-redux'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native'

import UserPost from './profileComponents/UserPost'

import { getPostsRequest } from '../../actions/posts'
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.imageContainer}>
                    <CardItem header bordered>
                        <Left>
                            <Thumbnail source={require('../../assets/user.png')} />
                            <Text style={styles.username}>Tay2000</Text>
                        </Left>
                    </CardItem>
                </View>

                <View style={styles.postsTextContainer}>
                    <Text style={styles.postText}>Posts</Text>
                </View>
            
                <ScrollView style={styles.postsContainer}>
                    <UserPost />
                    <UserPost />
                    <UserPost />
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(210,210,210,0.8)',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    imageContainer: {
        alignSelf: 'stretch'
    },
    postsTextContainer: {
        marginHorizontal: 10,
        marginTop: 10
    },
    username: {
        fontWeight: '700',
        paddingHorizontal: 8,
        fontSize: 20
    },
    postText: {
        fontWeight: '700',
        fontSize: 20
    },
    postsContainer: {
        marginTop: 5
    }

})

export default connect()(Profile)