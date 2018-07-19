import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

class AddPost extends Component {
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
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default AddPost