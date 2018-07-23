import React from 'react'

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar,
    Alert
} from 'react-native'

import { registerUserRequest } from '../../actions/register'

import { connect } from 'react-redux'

class RegisterForm extends React.Component {

    super(props) {
        constructor(props)

        this.state = {
            user_name: '',
            password: '',
            confirmedPassword: '',
            failedRegister: false
        }

        this.register = this.register.bind(this)
    }

    register() {
        const { user_name, password, confirmedPassword } = this.state

        if (password === confirmedPassword) {
            // let the user register...


            this.props.dispatch(registerUserRequest({user_name, password}))

            console.log('Success!')
        } else {
            Alert.alert(
                'Failed to register',
                'Passwords do not match',
                [
                  {text: 'Try again', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
        }
    }

    render() {
        const { navigation } = this.props

        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />



                {/* <TextInput
                    placeholder="email"
                    placeholderTextColor='#FFF'
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    onSubmitEditing={() => this.usernameInput.focus()}
                    style={styles.input}
                /> */}
                <TextInput
                    placeholder="username"
                    placeholderTextColor='#FFF'
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    ref={(input) => this.usernameInput = input}
                    style={styles.input}
                    onChangeText={(text) => this.setState({user_name: text})}
                />
                <TextInput
                    placeholder="password"
                    placeholderTextColor='#FFF'
                    returnKeyType="next"
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                    onSubmitEditing={() => this.reconfirmPassword.focus()}
                    onChangeText={(text) => this.setState({password: text})}

                />
                <TextInput
                    placeholder="re-enter password"
                    placeholderTextColor='#FFF'
                    returnKeyType="go"
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.reconfirmPassword = input}
                    onChangeText={(text) => this.setState({confirmedPassword: text})}

                />
                <TouchableOpacity onPress={() => this.register()} style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={[styles.buttonContainer, styles.backButton]}>
                    <Text style={styles.buttonText}>Back</Text>
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
    },
    backButton: {
        backgroundColor: 'red'
    }
})

export default connect()(RegisterForm)