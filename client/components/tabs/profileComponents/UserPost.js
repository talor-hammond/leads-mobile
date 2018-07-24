import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import { CardItem, Left, Right, Thumbnail } from 'native-base'

class UserPost extends Component {
    render() {
        return (
            <React.Fragment>
                <CardItem header bordered>
                    <Left>
                        <Text style={styles.username}>Title</Text>
                    </Left>
                    <Right>
                        <Text style={styles.openFullPostText}>Button</Text>
                    </Right>
                </CardItem>
                <CardItem>
                    <Left>
                        <Text>Here's where the description is going</Text>
                    </Left>
                </CardItem>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    postContainer: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    title: {
        alignSelf: 'flex-start',
        marginLeft: 10
    },
    testing: {
        backgroundColor: 'blue',
        alignSelf: 'flex-end'
    },
    test: {
        // alignSelf: 'flex-end'
    }
})

export default connect()(UserPost)