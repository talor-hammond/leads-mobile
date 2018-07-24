import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native'

import { CardItem, Left, Right, Thumbnail, Body, Card } from 'native-base'

class UserPost extends Component {
    render() {
        return (
            <React.Fragment>
                <Card  style={styles.header}>
                <CardItem header>
                    <Left>
                        <Text style={styles.title}>Title</Text>
                    </Left>
                    <Right>
                        <Text style={styles.openFullPostText}>View full post</Text>
                    </Right>
                </CardItem>
                <CardItem>
                    <Left>
                        <Text>Here's where the description is going</Text>
                    </Left>
                </CardItem>
                <CardItem bordered header>
                    <Body style={styles.deleteContainer}>
                        <Button
                            onPress={() => this.delete()}
                            title="Delete"
                            color="red"
                            style={styles.deleteText}
                        />
                    </Body>
                </CardItem>
                </Card>
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
        fontWeight: '700'
    },
    openFullPostText: {
        fontWeight: '700'
    },
    testing: {
        backgroundColor: 'blue',
        alignSelf: 'flex-end'
    },
    deleteContainer: {
        alignItems: 'center',
        // backgroundColor: 'red',
        width: 20,
        borderRadius: 7
    },
    deleteText: {
        color: 'red',
        fontWeight: '700'
    },
    header: {
        marginBottom: 15
    }
})
export default connect()(UserPost)
