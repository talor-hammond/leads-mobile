import React, { Component } from 'react'
import {
    Platform,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Linking
} from 'react-native'

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

class CardComponent extends Component {
    openGps(lat, long) {
        console.log(lat, long)
        Linking.openURL(`maps://app?saddr=100+101&daddr=${lat}+${long}`)
    }

    render() {
        const { username, topic, title, description, address, lat, long } = this.props // need an address!

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
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{title}</Text>
                        </View>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.description}>{description}</Text>
                        </View>
                    </Body>
                </CardItem>
                <CardItem>
                    <TouchableOpacity onPress={(lat, long) => this.openGps(lat, long)}>
                        <Text style={styles.address}>{address}</Text>
                    </TouchableOpacity>
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
    titleContainer: {
        alignItems: 'center'
    },
    title: {
        fontWeight: '700',
        textAlign: 'center'
    },
    descriptionContainer: {
        paddingHorizontal: 10
    },
    address: {
        color: 'blue',
        textDecorationLine: 'underline'
    }
})

export default CardComponent