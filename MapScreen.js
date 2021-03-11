import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import MapView from 'react-native-maps'; 
import Geolocation from '@react-native-community/geolocation';

// navigator.geolocation=require('@react-native-community/geolocation');

export default class MapScreen extends Component{
  
  constructor(props){
    super(props);
    this.state = {
      userLatitude :24.93127067387334,
      userLongitude:67.11414643773305
    }
  };

  componentDidMount() {
    this.locationWatchId = Geolocation.watchPosition(
      (pos) => {
        this.setState({
          userLatitude: pos.coords.latitude,
          userLongitude: pos.coords.longitude,
        });
      },
      (err) => console.warn(err),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 10000},
    );
  }

  componentWillUnmount() {
    Geolocation.clearWatch(this.locationWatchId);
  }

  render(){
    return(
      <View style={styles.container}>
     <MapView
       showsUserLocation
       //followsUserLocation
       style={styles.map}
       region={{
         latitude: this.state.userLatitude,
         longitude: this.state.userLongitude,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
   </View>
    );
  }
}


const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   flex:1,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});
