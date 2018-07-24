import React, { Component } from 'react'
import {
    Platform,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Linking
} from 'react-native'

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

class Comment extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.commentText}>
                    <Text>Hi</Text>
                    <Text style={styles.datePublished}>24 July 2018</Text>
                </View>
                <View style={styles.commentUser}>
                    <Thumbnail source={require('../../../assets/user.png')} /> 
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 2.5,
    },
    commentText: {
        flex: 3,
        marginLeft: 10
    },
    commentUser: {
        flex: 1,
        justifyContent: 'center'
    },
    datePublished: {
        fontStyle: 'italic',
        color: 'rgba(140, 140, 140, 0.8)'
    }
})

export default Comment