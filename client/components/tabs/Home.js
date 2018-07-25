import React, { Component } from 'react'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Modal
} from 'react-native'

import AddPost from './AddPost'
import FullPost from './homeComponents/FullPost'

// Redux:
import { connect } from 'react-redux'
import { getPostsRequest } from '../../actions/posts'
import { getUserRequest } from '../../actions/users'


import CardComponent from './homeComponents/CardComponent'
import { Container, Content } from 'native-base'

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            addPostVisible: false
        }

        this.toggleModal = this.toggleModal.bind(this)
    }

    componentDidMount() {
        const { dispatch, auth } = this.props

        dispatch(getUserRequest(auth.user.user_name))
        dispatch(getPostsRequest())
    }

    toggleModal() {
        console.log('Button clicked!')

        this.setState({
            addPostVisible: !this.state.addPostVisible
        })
    }

    render() {
        const { addPostVisible } = this.state
        console.log(this.props)

        return (
            <React.Fragment>


                <Modal animationType='slide' visible={addPostVisible}>
                    <AddPost toggleModal={this.toggleModal} />
                </Modal>

                <Container style={styles.container}>
                    <Content>
                        {
                            this.props.posts.map((post, i) => {
                                return (
                                    <React.Fragment key={i}>

                                        <CardComponent
                                            username={post.username}
                                            topic={post.topic}
                                            title={post.title}
                                            description={post.description}
                                            address={post.address}
                                            lat={post.lat}
                                            long={post.long}
                                            post_id={post.post_id}
                                            togglePostModal={this.togglePostModal}
                                        />

                                    </React.Fragment>
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

                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => this.toggleModal()}>
                        <Text style={styles.buttonText}>+</Text>
                    </TouchableOpacity>
                </View>

            </React.Fragment>
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
    },
    buttonContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 40,
        borderRadius: 40 / 2,
        bottom: 20,
        right: 20,
        backgroundColor: '#EAEAEA',
        borderWidth: 1
    },
    buttonText: {
        fontSize: 30,
        fontWeight: '700'
    }
    // buttonContainer: {
    //     height: 40,
    //     width: 80,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: 'rgba(210,210,210,0.8)',
    //     marginVertical: 10,
    //     paddingHorizontal: 5,
    //     borderRadius: 10,
    //     borderWidth: 1,
    //     borderColor: 'rgba(0,0,0,.5)'
    // },
    // buttonText: {
    //     fontWeight: '500'
    // }
})

const mapStateToProps = (props) => {
    return {
        posts: props.posts,
        auth: props.auth,
        users: props.users
    }
}

export default connect(mapStateToProps)(Home)