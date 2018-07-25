import React from 'react'

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Linking,
    KeyboardAvoidingView
} from 'react-native'

import { loginUser } from '../../actions/login'
import { connect } from 'react-redux'

class LoginForm extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            user_name: '',
            password: ''
        }

        this.login = this.login.bind(this)
    }

    login() {
        const { user_name, password } = this.state

        const user = {
            user_name,
            password
        }

        console.log(user)

        this.props.dispatch(loginUser(user))
    }

    register() {
        Linking.openURL('https://jumperlead.herokuapp.com/#/register')
    }

    render() {
        const { navigation } = this.props

        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />

                <View style={styles.helpTextContainer}>
                    <TouchableOpacity onPress={() => this.register()}>
                        <Text>Haven't registered yet? <Text style={styles.helpText}>Sign up here</Text></Text>
                    </TouchableOpacity>
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
                    onChangeText={(user_name) => this.setState({user_name})}
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
        backgroundColor: '#1a2c5b',
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
export default connect()(LoginForm)