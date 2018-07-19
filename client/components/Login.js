import React from 'react'

// React native components:
import {
    StyleSheet,
    Text,
    View,
    Image,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback
} from 'react-native'

import LoginForm from './LoginForm'

// Assets:
const logo = require('../assets/logo.png')

export default class Login extends React.Component { 
    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={logo}
                        />
                        <Text style={styles.title}>He's just a poor boy, from a poor family</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.formContainer}>
                    <LoginForm />
                </View>
            </KeyboardAvoidingView >
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db',
    },
    logoContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 135,
        height: 135
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        width: 135,
        textAlign: 'center',
        opacity: 0.89
    }
})