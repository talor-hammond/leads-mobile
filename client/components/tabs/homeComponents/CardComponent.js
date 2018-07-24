import React, { Component } from 'react'

import {
    Platform,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Linking,
    Modal
} from 'react-native'

import FullPost from './FullPost'

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

class CardComponent extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            fullPostVisible: false
        }

        this.togglePostModal = this.togglePostModal.bind(this)
    }

    openGps(address) {
        const parsedAddress = address.split(' ').join('+') // parsing the address into something we can feed to google maps url
        
        Linking.openURL(`maps://app?q=${parsedAddress}`)
    }


    togglePostModal() {
        this.setState({
            fullPostVisible: !this.state.fullPostVisible // reverses the boolean value of fullPostVisible
        })
    }

    render() {
        const { username, topic, title, description, address, lat, long, post_id } = this.props // need an address!
        const { fullPostVisible } = this.state

        return (
        <React.Fragment>
                <Modal animationType='slide' visible={fullPostVisible}> 
                    <FullPost
                        username={username}
                        topic={topic}
                        title={title}
                        description={description}
                        address={address}
                        lat={lat} 
                        togglePostModal={this.togglePostModal}
                    />
                </Modal>

                <Card style={styles.cardContainer}>
                    <CardItem header bordered>
                        <Left>
                            <Thumbnail source={require('../../../assets/user.png')} />
                            <Text style={styles.username}>{username}</Text>
                        </Left>
                        <Right>
                            <TouchableOpacity onPress={() => this.togglePostModal()}>
                                <Text style={styles.openFullPostText}>View full post</Text>
                            </TouchableOpacity>
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
                        <TouchableOpacity onPress={() => this.openGps(address)}>
                            <Text style={styles.address}>{address}</Text>
                        </TouchableOpacity>
                    </CardItem>
                </Card>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 15
    },
    username: {
        fontWeight: '700',
        paddingHorizontal: 8,
        fontSize: 20
    },
    openFullPostText: {
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
        paddingTop: 10
    },
    address: {
        color: 'blue',
        textDecorationLine: 'underline'
    }
})

export default CardComponent