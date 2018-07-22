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
                        this.props.posts.map(post => {
                            return (
                                <CardComponent
                                    key={post.id}
                                    username={post.username}
                                    topic={post.topic}
                                    title={post.title}
                                    description={post.description}
                                />
                            )
                        })
                    }
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(200,200,200,.5)',
    }
})

const mapStateToProps = ({ posts }) => {
    return {
        posts
    }
}

export default connect(mapStateToProps)(Home)