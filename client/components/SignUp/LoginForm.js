import React from 'react'

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Modal
} from 'react-native'

// Our register modal:
import Register from './Register'

class LoginForm extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            username: '',
            password: ''
        }
    }

    login() {
        // check if user exists w matching user_name + hash
        // setState of 'signedIn' in App.js to true? -- redirect to our main stacknav
        console.log('Hi')
    }

    render() {
        const { navigation } = this.props

        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />

                <View style={styles.helpTextContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text>Haven't registered yet?<Text style={styles.helpText}>Sign up here</Text></Text>
                    </TouchableOpacity> {/* TODO: Make the sign up here text clickable! Take to Register component */}
                </View>

                <TextInput
                    placeholder="username"
                    placeholderTextColor='#FFF'
                    // keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    style={styles.input}
                    onChangeText={(username) => this.setState({username})}
                />
                <TextInput
                    placeholder="password"
                    placeholderTextColor='#FFF'
                    returnKeyType="go"
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                    onChangeText={(password) => this.setState({password})}
                />
                <TouchableOpacity onPress={() => this.login()} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 50,
        backgroundColor: 'rgba(255,255,255,0.2)',
        marginBottom: 10,
        fontSize: 17,
        color: '#FFF',
        paddingHorizontal: 10,
        borderRadius: 6.5
    },
    buttonContainer: {
        backgroundColor: '#2980b9',
        paddingVertical: 15,
        borderRadius: 6.5
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700',
        fontSize: 20
    },
    helpTextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10
    },
    helpText: {
        // color: 'rgba(155, 100, 0, .75)',
        color: '#70161E',
        textDecorationLine: 'underline',
        marginHorizontal: 5
    }
})

export default LoginForm