import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

// Redux:
import { connect } from 'react-redux'
import { getPostsRequest } from '../../actions/posts'

import CardComponent from './homeComponents/CardComponent'
import { Container, Content } from 'native-base';

class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatch(getPostsRequest())
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    {
                        this.props.posts.map((post, i) => {
                            return (
                                <CardComponent
                                    key={i}
                                    username={post.username}
                                    topic={post.topic}
                                    title={post.title}
                                    description={post.description}
                                    address={post.address}
                                    lat={post.lat}
                                    long={post.long}
                                />
                            )
                        })
                    }
                    {/* { if (this.props.posts.length == 0) {
                            return (
                                <View style={styles.centered}>
                                    <Text style={styles.errorText}>No posts found...</Text>
                                </View>
                            )
                        } else {
                            this.props.posts.map(post => {
                                return (
                                    <CardComponent
                                        key={post.id}
                                        username={post.username}
                                        topic={post.topic}
                                        title={post.title}
                                        description={post.description}
                                        // address={post.address}
                                    />
                                )
                            })
                        }
                    } */}

                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(200,200,200,.5)',
    },
    centered: {
        flex: 1,
        justifyContent: 'centered',
        alignItems: 'center',
        justifyContent: 'center'
    },
    errorText: {
        fontSize: 20
    }
})

const mapStateToProps = ({ posts }) => {
    return {
        posts
    }
}

export default connect(mapStateToProps)(Home)