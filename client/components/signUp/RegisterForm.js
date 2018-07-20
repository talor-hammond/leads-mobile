import React from 'react'

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    StatusBar
} from 'react-native'

class RegisterForm extends React.Component {

    render() {
        const { navigation } = this.props

        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />

                <TextInput
                    placeholder="email"
                    placeholderTextColor='#FFF'
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    onSubmitEditing={() => this.usernameInput.focus()}
                    style={styles.input}
                />
                <TextInput
                    placeholder="username"
                    placeholderTextColor='#FFF'
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    ref={(input) => this.usernameInput = input}
                    style={styles.input}
                />
                <TextInput
                    placeholder="password"
                    placeholderTextColor='#FFF'
                    returnKeyType="next"
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                    onSubmitEditing={() => this.reconfirmPassword.focus()}
                />
                <TextInput
                    placeholder="re-enter password"
                    placeholderTextColor='#FFF'
                    returnKeyType="go"
                    secureTextEntry
                    style={styles.input}
                    ref={(input) => this.reconfirmPassword = input}
                />
                <TouchableOpacity onPress={() => navigation.navigate('MainTabs')} style={styles.buttonContainer}>
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

export default RegisterForm