import React, { Component } from 'react'
import { MapView } from 'expo'

import {
    View,
    Text,
    StyleSheet
} from 'react-native'

class CommunityMap extends Component {
    render() {
        return (
                <MapView
                    style={styles.map}
                    initialRegion={{ // feed in phones geolocation from state.
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
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