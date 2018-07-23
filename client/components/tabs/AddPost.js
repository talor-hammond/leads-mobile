import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'

class AddPost extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.pageTitle}>New Post</Text>

                <TextInput
                    placeholder="Post title"
                    placeholderTextColor='#FFF'
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    onSubmitEditing={() => this.messageInput.focus()}
                    style={styles.input}
                />


                <TextInput
                    placeholder="Enter your message here"
                    placeholderTextColor='#FFF'
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    ref={(input) => this.messageInput = input}
                    style={styles.input}
                />

                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.toggleModal()} style={[styles.buttonContainer, styles.backButton]}>
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(200, 200, 200, 0.1)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        height: 50,
        backgroundColor: 'rgba(255,255,255,.35)',
        marginBottom: 10,
        fontSize: 17,
        color: '#FFF',
        paddingHorizontal: 10,
        borderRadius: 6.5
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        marginBottom: 10,
        borderRadius: 6.5
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 20
    }
})

export default AddPost