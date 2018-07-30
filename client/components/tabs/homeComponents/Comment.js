import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import { Thumbnail } from 'native-base'

class Comment extends Component {
    render() {
        const { description, published, username } = this.props

        return(
            <View style={styles.container}>
                <View style={styles.commentUser}>
                    <Thumbnail source={require('../../../assets/user.png')} /> 
                </View>
                <View style={styles.commentText}>
                    <Text style={styles.username}>{username}</Text>
                    <Text>{description}</Text>
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
    username: {
        fontWeight: '700'
    },
    datePublished: {
        fontStyle: 'italic',
        color: 'rgba(140, 140, 140, 0.8)'
    }
})

export default Comment