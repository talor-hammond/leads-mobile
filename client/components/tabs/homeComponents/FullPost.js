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

import Comment from './Comment'

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
                    <View style={styles.postContainer}>
                    <View style={styles.header}>
                        {/* OP's user avatar */}
                        <Text style={styles.postTitle}>POST TITLE HERE</Text>
                    </View>

                    <View style={styles.postContent}>
                        <View style={styles.descriptionContainer}>
                            <Text>George Bush doesn't care about black people. My greatest 
                                pain in life is that I will never be able to see myself perform live.
                                Nothing in life is promised except death.
                            </Text>                        
                        </View>

                        <View style={styles.addressContainer}>
                            <Text style={styles.address}>123 Fake Street</Text> {/* make this open gps? */}
                        </View>
                    </View>

                        <View style={styles.postComments}>
                            <View style={styles.commentsTitleContainer}>
                                <Text style={styles.commentsTitle}>Comments</Text>
                            </View>

                            <ScrollView>
                                <Comment />
                                <Comment />
                                <Comment />
                                <Comment />
                                <Comment />
                            </ScrollView>
                            <View style={styles.commentContainer}>
                                <TextInput
                                    placeholder="Write a comment..."
                                    placeholderTextColor='rgba(140, 140, 140, 0.8)'
                                    autoCapitalize="none"
                                    autoCorrect={true}
                                    style={styles.input}
                                />
                                <View style={styles.commentButton}>
                                    <TouchableOpacity onPress={() => this.addComment()}>
                                        <Text style={styles.buttonText}>Add</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={styles.backButtonContainer}>
                            <TouchableOpacity onPress={() => this.props.togglePostModal()} style={styles.button}>
                                <Text style={styles.backButtonText}>Back</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    postContainer: {
        flex: 1,
        marginTop: 35,
        backgroundColor: '#EAEAEA'
    },
    header: {
        marginHorizontal: 10,
        marginVertical: 20
    },
    postTitle: {
        fontWeight: '700',
        fontSize: 20
    },
    descriptionContainer: {
        marginHorizontal: 30
    },
    addressContainer: {
        marginTop: 10,
        marginHorizontal: 30
    },
    address: {
        fontStyle: 'italic'
    },
    postComments: {
        marginTop: 20,
        marginHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 7

    },
    commentsTitleContainer: {
        alignItems: 'center',
        marginVertical: 15
    },
    commentContainer: {
        marginVertical: 10,
        marginHorizontal: 8,
        flexDirection: 'row',
        
    },
    commentsTitle: {
        fontWeight: '700',
        fontSize: 16
    },
    backButtonContainer: {
        marginTop: 30,
        marginHorizontal: 10
    },
    backButtonText: {
        fontWeight: '700',
        textAlign: 'center'
    },
    input: {
        flex: 3
    },
    commentButton: {
        flex: 1,
        backgroundColor: 'grey',
        borderRadius: 4
    },
    buttonText: {
        textAlign: 'center'
    },

})

export default FullPost