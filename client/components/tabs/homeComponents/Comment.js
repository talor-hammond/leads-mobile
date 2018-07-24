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
        const { description, published } = this.props

        return(
            <View style={styles.container}>
                <View style={styles.commentUser}>
                    <Thumbnail source={require('../../../assets/user.png')} /> 
                </View>
                <View style={styles.commentText}>
                    <Text>{description}</Text>
                    <Text>Username here</Text>
                    <Text style={styles.datePublished}>{published}</Text>
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
        // marginBottom: 0
    },
    commentText: {
        flex: 3,
        marginLeft: 10
    },
    commentUser: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    datePublished: {
        fontStyle: 'italic',
        color: 'rgba(140, 140, 140, 0.8)'
    }
})

export default Comment