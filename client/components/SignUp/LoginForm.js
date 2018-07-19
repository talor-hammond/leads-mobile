import React from 'react'

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar
} from 'react-native'


class LoginForm extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <View style={styles.helpTextContainer}>
                    <Text style={styles.helpText}>Haven't registered yet? Sign up here</Text> {/* TODO: Make the sign up here text clickable! Take to Register component */}
                </View>
                <TextInput
                    placeholder="email"
                    placeholderTextColor='#FFF'
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    style={styles.input}
                />
                <TextInput
                    placeholder="password"
                    placeholderTextColor='#FFF'
                    returnKeyType="go"
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                />
                <TouchableOpacity style={styles.buttonContainer}>
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
    }
})

export default LoginForm