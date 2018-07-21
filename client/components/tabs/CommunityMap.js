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

                <MapView.Marker // marker at the user's current location.
                    coordinate={{
                        latitude: region.latitude, 
                        longitude: region.longitude
                    }}
                >
                <View style={styles.radius}>
                    <View style={styles.marker}></View>
                </View>
                </MapView.Marker>

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
    map: {
        flex: 1
    },
    marker: {
        height: 20,
        width: 20,
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 20 / 2,
        overflow: 'hidden',
        backgroundColor: '#007AFF'
    }
})

export default CommunityMap