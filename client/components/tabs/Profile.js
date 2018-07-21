import React, { Component } from 'react'

import { connect } from 'react-redux'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import { getPostsRequest } from '../../actions/posts'

class Profile extends Component {
    render() {
        console.log(this.props)
        const { dispatch } = this.props

        return (
            <View style={styles.container}>
            <TouchableOpacity onPress={() => dispatch(getPostsRequest())}>
                <Text>Hello people of earth</Text>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default connect()(Profile)