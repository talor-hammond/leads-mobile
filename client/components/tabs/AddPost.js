import React, { Component } from 'react'

import { getUserRequest } from '../../actions/users'
import { addPostRequest } from '../../actions/posts'

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard
} from 'react-native'
import { connect } from 'react-redux';

class AddPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            description: '',
            address: ''
            // user_id: this.props.users[0].id
        }
    }

    componentDidMount() {
        const username = this.props.auth.user.user_name
        console.log(this.props.auth)
    }

    submit() {
        const { title, description, address } = this.state

        const post = {
            title,
            description,
            address,
            user_id: this.props.users[0].id
            // username: this.props.users[0].user_name
        }

        console.log(post)

        this.props.dispatch(addPostRequest(post))

        this.props.toggleModal() // this needs to wait?
    }
    
    render() {

        console.log(this.props)

        return (
            <View style={styles.container}>

                <View style={styles.cancel}>
                <TouchableOpacity onPress={() => this.props.toggleModal()} style={styles.redButton}>
                    <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
                </View>

                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.pageTitle}>Add a lead...</Text>
                    </View>
                </TouchableWithoutFeedback>

                <View style={styles.formContainer}>
                    <KeyboardAvoidingView behavior='padding' style={styles.keyboard}>

                        <TextInput
                            placeholder="Post title"
                            placeholderTextColor='rgba(255, 255, 255, 0.8)'
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType="next"
                            onSubmitEditing={() => this.messageInput.focus()}
                            style={styles.titleInput}
                            onChangeText={(text) => this.setState({ title: text })}
                        />

                        <TextInput
                            multiline style={{ height: 100, backgroundColor: '#ccc' }}
                            placeholder="Enter your message here"
                            placeholderTextColor='rgba(255, 255, 255, 0.8)'
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType="next"
                            onSubmitEditing={() => this.addressInput.focus()}
                            ref={(input) => this.messageInput = input}
                            style={styles.descriptionInput}
                            onChangeText={(text) => this.setState({ description: text })}
                        />

                        <TextInput
                            placeholder="Enter your address here"
                            placeholderTextColor='rgba(255, 255, 255, 0.8)'
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType="go"
                            ref={(input) => this.addressInput = input}
                            style={styles.titleInput}
                            onChangeText={(text) => this.setState({ address: text })}
                            onSubmitEditing={() => this.submit()}
                        />
                        <View style={styles.bothButtons}>
                            <TouchableOpacity onPress={() => this.submit()} style={styles.blueButton}>
                                <Text style={styles.buttonText}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7971ea',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pageTitle: {
        fontSize: 30,
        fontFamily: 'Arial',
        color: 'white',
        fontStyle: 'italic'
    },
    titleContainer: {
        marginBottom: 20
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
        marginBottom: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    bothButtons: {
        // marginTop: 10
    },
    blueButton: {
        backgroundColor: '#1a2c5b',
        paddingVertical: 15,
        marginBottom: 5,
        borderRadius: 6.5
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 20
    },
    cancelButton: {
        paddingVertical: 15,
        marginBottom: 5,
        borderRadius: 6.5
    },
    cancel: {
        position: 'absolute',
        top: 30,
        left: 15
    },
    cancelText: {
        fontSize: 19,
        color: 'rgba(255, 255, 255, 0.8)'
    }
})

const mapStateToProps = ({ auth, users }) => {
    return {
        auth,
        users
    }
}

export default connect(mapStateToProps)(AddPost)