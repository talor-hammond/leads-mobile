import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import { logoutUser } from '../../actions/logout'

class Messages extends Component {

    componentDidMount() {
        this.props.dispatch(logoutUser())
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hello people of earth</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default connect()(Messages)