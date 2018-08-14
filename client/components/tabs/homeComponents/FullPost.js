import React, { Component } from 'react'

import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Picker,
    ScrollView,
    StatusBar
} from 'react-native'

import { connect } from 'react-redux'
import { getCommentsRequest, addCommentRequest } from '../../../actions/comments'
import { getUserRequest } from '../../../actions/users'


import Comment from './Comment'

class FullPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            comments: this.props.comments,
            content: '',
            user_id: this.props.users[0].id,
            post_id: this.props.post_id
        }
    }

    componentDidMount() {
        const {post_id, dispatch} = this.props

        dispatch(getCommentsRequest(post_id))
    }
    
    addComment() {
        const { content, user_id, post_id } = this.state
        const { dispatch } = this.props

        const newComment = {
            content,
            user_id,
            post_id
        }

        console.log(newComment)

        dispatch(addCommentRequest(newComment, newComment.post_id))
    }

    render() {
        console.log(this.props)

        const { title, description, address, id } = this.props
        return (
            <View style={styles.container}>

                <View style={styles.postContainer}>
                    <View style={styles.header}>
                        {/* OP's user avatar */}
                        <Text style={styles.postTitle}>{title}</Text>
                    </View>

                    <View style={styles.postContent}>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.description}>
                                Description:
                            </Text>
                            <Text>
                                {description}
                            </Text>
                        </View>

                        <View style={styles.addressContainer}>
                            <Text style={styles.description}>
                                Address:
                            </Text>
                            <Text style={styles.address}>
                                {address}
                            </Text> {/* make this open gps? */}
                        </View>
                    </View>

                    <ScrollView>
                    <View style={styles.postComments}>
                        <View style={styles.commentsTitleContainer}>
                            <Text style={styles.commentsTitle}>Comments</Text>
                        </View>

                        <View style={styles.containerForAllComments}>
                                {
                                    this.props.comments.map((comment, id) => {
                                        return (
                                            <Comment key={id} username={comment.username} description={comment.content} published={comment.published} />
                                        )
                                    })
                                }
                        </View>

                        <View style={styles.commentContainer}>
                            <TextInput
                                placeholder="Write a comment..."
                                placeholderTextColor='rgba(140, 140, 140, 0.8)'
                                autoCapitalize="none"
                                autoCorrect={true}
                                style={styles.input}
                                onChangeText={(content) => this.setState({content})}
                                clearButtonMode="always"
                            />
                            <View style={styles.commentButton}>
                                <TouchableOpacity onPress={() => this.addComment(this.state.comment)}>
                                    <Text style={styles.buttonText}>Add</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    

                    </ScrollView>
                <View style={styles.backButtonContainer}>
                    <TouchableOpacity onPress={() => this.props.togglePostModal()} style={styles.button}>
                        <Text style={styles.backButtonText}>Back</Text>
                    </TouchableOpacity>
                </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAEAEA',
    },
    postContainer: {
        flex: 1,
        backgroundColor: '#EAEAEA'
    },
    header: {
        alignItems: 'center',
        paddingTop: 45,
        paddingBottom: 25,
        backgroundColor: '#7971ea',
        marginBottom: 10
    },
    postTitle: {
        fontWeight: '700',
        fontSize: 22,
        color: 'white'
    },
    descriptionContainer: {
        marginHorizontal: 30
    },
    description: {
        fontWeight: '700'
    },
    addressContainer: {
        marginTop: 10,
        marginHorizontal: 30
    },
    address: {
        fontStyle: 'italic'
    },
    postComments: {
        marginTop: 20,
        marginHorizontal: 20,
        backgroundColor: 'white',
        borderRadius: 7,
    },
    commentsTitleContainer: {
        alignItems: 'center',
        marginVertical: 15
    },
    commentContainer: {
        marginVertical: 10,
        marginHorizontal: 8,
        flexDirection: 'row',

    },
    commentsTitle: {
        fontWeight: '700',
        fontSize: 16
    },
    backButtonContainer: {
        paddingVertical: 20,
        backgroundColor: '#7971ea',
        justifyContent: 'center'
    },
    backButtonText: {
        color: 'white',
        fontWeight: '700',
        textAlign: 'center'
    },
    input: {
        flex: 3
    },
    commentButton: {
        flex: 1,
        backgroundColor: 'rgba(210,210,210,0.8)',
        borderRadius: 4
    },
    buttonText: {
        textAlign: 'center'
    },
    containerForAllComments: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(210,210,210,0.3)',
        paddingBottom: 15
    }
})

const mapStateToProps = (props) => {
    return {
        auth: props.auth,
        users: props.users,
        comments: props.comments
    }
}

export default connect(mapStateToProps)(FullPost)