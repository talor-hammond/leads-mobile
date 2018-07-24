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

import CardComponent from './homeComponents/CardComponent'
import { Container, Content } from 'native-base';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            addPostVisible: false
        }

        this.toggleModal = this.toggleModal.bind(this)
    }
    
    componentDidMount() {
        this.props.dispatch(getPostsRequest())
    }
    
    toggleModal() {
        this.setState({
            addPostVisible: !this.state.addPostVisible
        })
    }
    
    render() {
        console.log(this.props)

        const { addPostVisible } = this.state

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

                    <TouchableOpacity onPress={() => this.toggleModal()}>
                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Add a lead</Text>
                        </View>
                    </TouchableOpacity>

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

const mapStateToProps = ({ posts }) => {
    return {
        posts
    }
}

export default connect(mapStateToProps)(Home)