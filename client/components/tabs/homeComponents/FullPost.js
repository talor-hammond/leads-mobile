import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Picker
} from 'react-native'

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

class FullPost extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { username, topic, title, description, address, lat, long } = this.props
        console.log(this.props)
        return (
            <React.Fragment>
                <View style={styles.container}>
                    <View style={styles.map}>

                        <TouchableOpacity onPress={() => this.props.togglePostModal()} style={styles.button}>
                            <Text>Back</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => this.props.togglePostModal()} style={styles.button}>
                        <Text>Hello</Text>
                    </TouchableOpacity>
                </View>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        backgroundColor: 'blue'
    },
    postContent: {
        backgroundColor: 'brown'
    },
    map: {
        backgroundColor: 'pink'
    },
    button: {
        backgroundColor: 'yellow'
    }
})

export default FullPost