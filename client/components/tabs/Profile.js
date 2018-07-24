import React, { Component } from 'react'

import { connect } from 'react-redux'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native'

import UserPost from './ProfileComponents/UserPost'

import { getUserRequest } from '../../actions/users'
import { getPostsByUserIdRequest } from '../../actions/posts'
import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        this.props.dispatch(getUserRequest(this.props.auth.user.user_name)) // feed user info into users state
        // this.props.dispatch(getPostsByUserIdRequest(this.props.users[0].id)) // need this to wait!    
    }

    componentDidMount() {
        // grab all the user data, username, posts array, etc.
        // this.props.dispatch(getPostsByUserIdRequest(this.props.users[0].id))
        // const { posts, auth.user.user_name } = this.props
        // const username = auth.user.user_name
        // const usersPosts = this.props.posts.filter(post => post.post_id == 1)        
        const usersPosts = this.props.posts.filter(post => post.username == this.props.auth.user.user_name)
        
        this.setState({posts: usersPosts})
    }
    
    render() {

        return (
            <View style={styles.container}>

                <View style={styles.imageContainer}>
                    <CardItem header bordered>
                        <Left>
                            <Thumbnail source={require('../../assets/user.png')} />
                            <Text style={styles.username}>Tay2000</Text>
                        </Left>
                    </CardItem>
                </View>

                <View style={styles.postsTextContainer}>
                    <Text style={styles.postText}>Posts</Text>
                </View>
            
                <ScrollView style={styles.postsContainer}>
                    { // if !this.state.posts.map, return some other stuff
                        this.state.posts.map((post, i) => {
                            return (
                                <UserPost key={i} />
                            )
                        })
                    }
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(210,210,210,0.8)',
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    imageContainer: {
        alignSelf: 'stretch'
    },
    postsTextContainer: {
        marginHorizontal: 10,
        marginTop: 10
    },
    username: {
        fontWeight: '700',
        paddingHorizontal: 8,
        fontSize: 20
    },
    postText: {
        fontWeight: '700',
        fontSize: 20
    },
    postsContainer: {
        marginTop: 5
    }

})

const mapStateToProps = (props) => {
    return {
        auth: props.auth,
        users: props.users,
        posts: props.posts
    }
}

export default connect(mapStateToProps)(Profile)