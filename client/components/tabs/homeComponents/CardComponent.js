import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import { Card, CardItem, Thumbnail, Body, Footer, Left, Right, Button, Icon } from 'native-base'

class CardComponent extends Component {
    render() {
        const { username, topic, title, description } = this.props // need an address!

        return (
            <Card style={styles.cardContainer}>
                <CardItem header bordered>
                    <Left>
                        <Thumbnail source={require('../../../assets/user.png')} />
                        <Text style={styles.username}>{username}</Text>
                    </Left>
                    <Right>
                        <Text style={styles.topic}>{topic}</Text>
                    </Right>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text style={styles.title}>{title}</Text>
                        <Text>{description}</Text>
                    </Body>
                    <Text style={styles.address}>Address down here :~)</Text>
                </CardItem>
                <CardItem header bordered style={{ height: 45 }}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-chatbubbles-outline"
                                style={{ color: 'black', left: 100 }} />
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent>
                            <Icon name="ios-pin-outline"
                                style={{ color: 'black', right: 100 }} />
                        </Button>
                    </Right>
                </CardItem>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 15
    },
    username: {
        fontWeight: '700',
        paddingHorizontal: 5
    },
    topic: {
        fontStyle: 'italic'
    },
    title: {
        fontWeight: '700'
    },
    // address: {
    //     marginLeft: 10
    // }
})

export default CardComponent