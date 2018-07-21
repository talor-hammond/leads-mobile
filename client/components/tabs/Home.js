import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import CardComponent from './homeComponents/CardComponent'
import { Container, Content } from 'native-base';

class Home extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <CardComponent/>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Home