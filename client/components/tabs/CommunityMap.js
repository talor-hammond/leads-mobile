import React, { Component } from 'react'
import { MapView, Marker } from 'expo'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

class CommunityMap extends Component {
    constructor(props) {
        super(props)

        this.state = {
            region: {  // feed in phones geolocation from state.
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            posts: [ // feed in our redux 'posts' state here!
                {
                    latitude: 37.78825,
                    longitude: -122.4324
                }
            ]
        }
    }

    render() {
        const { region, posts } = this.state // pulling from state...

        return (
                <MapView
                    style={styles.map}
                    initialRegion={region}
                >

                {
                    posts.map((post, i) => {
                        return (
                            <MapView.Marker
                            key={i} 
                            coordinate={{
                                latitude: post.latitude,
                                longitude: post.longitude
                            }}
                        />
                        )
                    })
                }

                </MapView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    map: {
        flex: 1
    }
})

export default CommunityMap