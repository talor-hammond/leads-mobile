import React, { Component } from 'react'
import { MapView } from 'expo'

// Redux imports:
import { connect } from 'react-redux'
import { getPostsRequest } from '../../actions/posts'

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
                latitude: -41.297292,
                longitude: 174.774144,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            },
            posts: this.props.posts  // feed in our redux 'posts' state here!
        }
    }

    componentDidMount() {
        this.props.dispatch(getPostsRequest())
    }

    render() {
        console.log('Our redux state: ', this.props.posts)
        // console.log('Our component\'s state: ', this.state.posts)

        const { region } = this.state // pulling from component's state...
        const { posts } = this.props // pulling from redux state...

        return (
            <MapView
                style={styles.map}
                provider={MapView.PROVIDER_GOOGLE}
                customMapStyle={generatedMapStyle}
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
                    <Animated.View style={[styles.marker, styles.markerWrap]}> {/* Styling a particular marker; overrides the default */}
                        <Animated.View style={styles.ring}></Animated.View>
                    </Animated.View>
                </MapView.Marker>

                {
                    posts.map(post => { // mapping through each item in posts...
                        return (
                            <MapView.Marker
                                key={post.post_id}
                                coordinate={{
                                    latitude: post.lat,
                                    longitude: post.long
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
        width: 15,
        height: 15,
        borderRadius: 15 / 2,
        borderWidth: 1,
        borderColor: 'white',
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

// Our custom map style:
const generatedMapStyle = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#242f3e"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#746855"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#242f3e"
            }
        ]
    },
    {
        "featureType": "administrative.land_parcel",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#d59563"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#d59563"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#263c3f"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#6b9a76"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#38414e"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#212a37"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#9ca5b3"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#746855"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#1f2835"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#f3d19c"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2f3948"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#d59563"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#17263c"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#515c6d"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#17263c"
            }
        ]
    }
]

const mapStateToProps = ({ posts }) => {
    return {
        posts
    }
}

export default connect(mapStateToProps)(CommunityMap)