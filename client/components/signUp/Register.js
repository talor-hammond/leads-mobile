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

import RegisterForm from './RegisterForm'

// Assets:
const logo = require('../../assets/logo.png')

export default class Register extends React.Component { 
    static navigationOptions = { header: null } // Removing the navigation header from the top.

    render() {
        console.log('Register props: ' + this.props)

        return (
            <KeyboardAvoidingView behavior='padding' style={styles.container}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={logo}
                        />
                        <Text style={styles.subtitle}>Get started by filling out the form below!</Text>
                    </View>
                </TouchableWithoutFeedback>
                <View style={styles.formContainer}>
                    <RegisterForm navigation={this.props.navigation}/>
                </View>
            </KeyboardAvoidingView >
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#666',
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
    subtitle: {
        color: '#FFF',
        fontSize: 15,
        marginTop: 10,
        width: 170,
        textAlign: 'center',
        opacity: 0.89
    }
})