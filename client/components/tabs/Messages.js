import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

class Messages extends Component {
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

export default Messages