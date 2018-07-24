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
                <View style={styles.titleContainer}>
                    <Text style={styles.pageTitle}>New Post</Text>
                </View>
                <View style={styles.formContainer}>

                    <TextInput
                        placeholder="Post title"
                        placeholderTextColor='#FFF'
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="next"
                        onSubmitEditing={() => this.messageInput.focus()}
                        style={styles.titleInput}
                    />


                    <TextInput
                        placeholder="Enter your message here"
                        placeholderTextColor='#FFF'
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="next"
                        onSubmitEditing={() => this.addressInput.focus()}
                        ref={(input) => this.messageInput = input}
                        style={styles.descriptionInput}
                    />

                    <TextInput
                        placeholder="Enter your address here"
                        placeholderTextColor='#FFF'
                        autoCapitalize="none"
                        autoCorrect={false}
                        returnKeyType="next"
                        ref={(input) => this.addressInput = input}
                        style={styles.titleInput}
                    />

                    <View style={styles.bothButtons}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.blueButton}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.toggleModal()} style={styles.redButton}>
                            <Text style={styles.buttonText}>Cancel</Text>
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
        backgroundColor: 'skyblue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pageTitle: {
        fontSize: 70
    },
    titleContainer: {
        marginBottom: 60
    },
    titleInput: {
        height: 50,
        backgroundColor: 'rgba(255,255,255,.35)',
        marginBottom: 10,
        fontSize: 17,
        color: '#FFF',
        paddingHorizontal: 10,
        borderRadius: 6.5,
        // marginTop: 60
    },
    descriptionInput: {
        fontSize: 17,
        height: 150,
        width: 310,
        color: '#FFF',
        backgroundColor: 'rgba(255,255,255,.35)',
        borderRadius: 6.5,
        paddingHorizontal: 10,
        marginBottom: 10
    },
    bothButtons: {
        marginTop: 45
    },
    blueButton: {
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        marginBottom: 5,
        borderRadius: 6.5
    },
    redButton: {
        backgroundColor: 'red',
        paddingVertical: 15,
        marginBottom: 5,
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