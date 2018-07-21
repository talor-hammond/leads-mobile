import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'
import { red } from '../../../../node_modules/ansi-colors';

class CardComponent extends Component {
    render() {
        return (
            <Card style={styles.cardContainer}>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../../../assets/user.png')}/>
                        <Body>
                            <Text>username</Text>
                            <Text>post topic</Text>
                        </Body>
                    </Left>
                    <Right>
                    <Text note>time/date</Text>
                    </Right>
                </CardItem>
                <CardItem style={{height:45}}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-chatbubbles-outline"
                            style={{ color: 'black', left: 100}} />
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent>
                            <Icon name="ios-pin-outline"
                            style={{ color: 'black', right: 100}} />
                        </Button>
                    </Right>
                </CardItem>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 5
    }
})

export default CardComponent