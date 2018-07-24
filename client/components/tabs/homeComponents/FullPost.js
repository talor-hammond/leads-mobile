import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Picker,
    ScrollView
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
                <View style={styles.container}>
                    <View style={styles.header}>
                        {/* OP's user avatar */}
                        <Text style={styles.postTitle}>POST TITLE HERE</Text>
                    </View>
                    <View style={styles.postContent}>
                        <Text>George Bush doesn't care about black people. My greatest 
                            pain in life is that I will never be able to see myself perform live.
                            Nothing in life is promised except death.
                        </Text>                        
                        <View style={styles.buttonContainer}>
                            <Text>Add Comment</Text> {/* Add comment button here */}
                            <Text>Go to maps</Text> {/* Go to Maps button here */}
                        </View>
                    </View>
                    <View style={styles.postComments}>
                        <ScrollView>
                            <CardItem />
                            <CardItem />
                            <CardItem />
                        </ScrollView>
                    </View>
                    <View style={styles.backButtonContainer}>
                        <TouchableOpacity onPress={() => this.props.togglePostModal()} style={styles.button}>
                            <Text style={styles.backButtonText}>Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAEAEA',
        justifyContent: 'space-around'
    },
    header: {
        marginHorizontal: 10
    },
    backButtonContainer: {
        marginTop: 30,
        marginHorizontal: 10
    },
    backButtonText: {
        fontWeight: '700',
        textAlign: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})

export default FullPost