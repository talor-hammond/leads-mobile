import React, { Component } from 'react'
import { MapView } from 'expo'

import {
    View,
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
                    id: 1,
                    title: 'My car broke down foo',
                    description: 'Can someone bring me jumper leads plz!',
                    latitude: 37.78825,
                    longitude: -122.4324,
                    user_id: 2
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
                    posts.map(post => { // mapping through each item in posts...
                        return (
                            <MapView.Marker
                                key={post.id}
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