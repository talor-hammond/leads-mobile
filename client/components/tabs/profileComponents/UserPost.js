import React, { Component } from 'react'

import { connect } from 'react-redux'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native'

class UserPost extends Component {
    render () {

        return (
            <View style={styles.post}>
                <Text>We're fucked</Text>

                </View>
            )
        }
        
}

const styles = StyleSheet.create({
    post: {
        height: 120,
        backgroundColor: 'white',
        marginBottom: 16
    }

})



export default connect()(UserPost)