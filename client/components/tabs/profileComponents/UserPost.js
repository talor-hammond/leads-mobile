import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    Modal
} from 'react-native'

import FullPost from '../homeComponents/FullPost'

import { CardItem, Left, Right, Thumbnail, Body, Card } from 'native-base'

class UserPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullPostVisible: false
        }
    }

    togglePostModal() {
        this.setState({
            fullPostVisible: !this.state.fullPostVisible
        })
    }

    render() {
        const { title, description, address, id } = this.props

        return (
            <React.Fragment>
                <Modal animationType='slide' visible={this.state.fullPostVisible}>
                    <FullPost
                        title={title}
                        description={description}
                        address={address}
                        id={id}
                        togglePostModal={this.togglePostModal}
                    />
                </Modal>

                <Card style={styles.header}>
                    <CardItem header>
                        <Left>
                            <Text style={styles.title}>{title}</Text>
                        </Left>
                        <Right>
                            <TouchableOpacity onPress={() => this.togglePostModal()}>
                                <Text style={styles.openFullPostText}>View full post</Text>
                            </TouchableOpacity>
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Text>{description}</Text>
                        </Left>
                    </CardItem>
                    <CardItem bordered header>
                        <Body style={styles.deleteContainer}>
                            <Button
                                onPress={() => this.delete()}
                                title="Delete"
                                color="red"
                                style={styles.deleteText}
                            />
                        </Body>
                    </CardItem>
                </Card>
            </React.Fragment>
        )
    }
}
const styles = StyleSheet.create({
    postContainer: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    title: {
        fontWeight: '700'
    },
    openFullPostText: {
        fontWeight: '700'
    },
    testing: {
        backgroundColor: 'blue',
        alignSelf: 'flex-end'
    },
    deleteContainer: {
        alignItems: 'center',
        width: 20,
        borderRadius: 7
    },
    deleteText: {
        color: 'rgba(100,100,255, 0.8)',
        fontWeight: '700'
    },
    header: {
        marginBottom: 15
    }
})

export default connect()(UserPost)
