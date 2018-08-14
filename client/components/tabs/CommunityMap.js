import React, { Component } from 'react'
import { MapView, Location, Permissions } from 'expo'

// Redux imports:
import { connect } from 'react-redux'
import { getPostsRequest } from '../../actions/posts'

import {
    Animated, // for our Animated.View inside each Marker
    View,
    StyleSheet,
    Text,
    StatusBar
} from 'react-native'

class CommunityMap extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isGettingRegion: true,
            region: {  // TODO: feed in phones geolocation from state.
                latitude: 0,
                longitude: 0,
                latitudeDelta: 0.025, // our 'zoom' level! 0.025 == a few city blocks
                longitudeDelta: 0.025
            },
            posts: this.props.posts  // feed in our redux 'posts' state here!
        }
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position.coords)
                var latitude = parseFloat(position.coords.latitude)
                var longitude = parseFloat(position.coords.longitude)
                var latitudeDelta = 0.025
                var longitudeDelta = 0.025

                const initialRegion = {
                    latitude,
                    longitude,
                    latitudeDelta,
                    longitudeDelta
                }

                console.log('Initial region: ', initialRegion)

                this.setState({
                    region: initialRegion,
                    isGettingRegion: false
                })
            },
            (error) => {
                console.log(error)
            },
            { enableHighAccuracy: false, timeout: 20000, maximumAge: 10000 }
        )

        this.props.dispatch(getPostsRequest())
    }

    render() {

        const { region, isGettingRegion } = this.state // pulling from component's state...
        const { posts } = this.props // pulling from redux state...
        console.log('Region in state: ', region)

        if (!isGettingRegion) {

            return (
                <MapView
                    style={styles.map}
                    // provider={MapView.PROVIDER_GOOGLE}
                    // customMapStyle={generatedMapStyle} ...custom mapStyles are causing issues with custom marker style
                    initialRegion={region}
                >

                <StatusBar
                    barStyle="light-content"
                />

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
                        posts.map(post => {
                            return (
                                <MapView.Marker
                                    key={post.post_id}
                                    coordinate={{
                                        latitude: Number(post.lat),
                                        longitude: Number(post.long)
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
        } else {
            return (
                <View style={styles.fetchingContainer}>
                    <Text style={styles.fetchingText}>Waiting for location data...</Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    fetchingContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    fetchingText: {
        fontWeight: '700',
        color: 'rgba(210,210,210,0.9)'
    },
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
        borderRadius: 15 / 2, // make it a circle :~)
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: "rgba(130,4,150, 0.9)",
    },
    ring: {
        width: 24,
        height: 24,
        borderRadius: 24 / 2,
        backgroundColor: "rgba(130,4,150, 0.3)",
        position: "absolute",
        borderWidth: 1,
        borderColor: "rgba(130,4,150, 0.5)",
    },
    otherMarker: {
        width: 15,
        height: 15,
        borderRadius: 15 / 2,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: "rgba(255,4,0, 0.5)",
    },
    otherRing: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: "rgba(130,4,0, 0.3)",
        position: "absolute",
        borderWidth: 1,
        borderColor: "rgba(200,4,0, 0.6)"
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