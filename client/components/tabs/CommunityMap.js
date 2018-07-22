import React, { Component } from 'react'
import { MapView } from 'expo'

import {
    Animated, // for our Animated.View inside each Marker
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
                    category: 'Car troubles',
                    description: 'Can someone bring me jumper leads plz!',
                    latitude: 37.78825,
                    longitude: -122.2324, // WE NEED SOME CUBA ST DATA
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
                    title='Hi there!'
                    description='This is your current location :~)'
                > 
                    <View style={[styles.marker, styles.markerWrap]}> {/* Styling a particular marker; overrides the default */}
                        <View style={styles.ring}></View>
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
                                title={post.title}
                                description={post.description}
                            >
                            <View style={[styles.otherMarker, styles.markerWrap]}>
                                <View style={styles.otherRing}></View>
                            </View>
                            </MapView.Marker>
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
    markerWrap: {
        alignItems: "center",
        justifyContent: "center",
    },
    marker: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "rgba(130,4,150, 0.9)",
    },
    ring: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: "rgba(130,4,150, 0.3)",
        position: "absolute",
        borderWidth: 1,
        borderColor: "rgba(130,4,150, 0.5)",
    },
    otherMarker: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "rgba(130,4,0, 0.9)"
    },
    otherRing: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: "rgba(130,4,0, 0.3)",
        position: "absolute",
        borderWidth: 1,
        borderColor: "rgba(130,4,0, 0.5)"
    }
})

export default CommunityMap