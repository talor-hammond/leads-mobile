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
const logo = require('../../assets/logocurved.png')

export default class Login extends React.Component { 
    static navigationOptions = { header: null } // Removing the navigation header from the top.

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={logo}
                        />
                        <Text style={styles.title}>Stay connected with your community</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.formContainer}>
                    <LoginForm navigation={this.props.navigation}/>
                </View>
            </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7971ea',
    },
    logoContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 150,
        height: 150
    },
    formContainer: {
        flex: 1,
        marginBottom: 215
    },
    title: {
        color: '#FFF',
        fontSize: 15,
        marginTop: 0,
        width: 170,
        textAlign: 'center',
        opacity: 0.89
    }
})