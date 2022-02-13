import React, { useContext, } from 'react';
import { GymContext } from '../../ContextAPI/CreateGymContext';
import { View, StyleSheet } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import { MapIconButt} from './Butt'

function Map({marker}){
    const nav = useNavigation()
    const {markerInfo} = useContext(GymContext)
    const init = !marker? markerInfo[1] : marker[1];
    console.log(init[1]);
  return (
    <View style={marker?styles.containerB:styles.container}>
      <MapView
        style={{ alignSelf: 'stretch', height: '100%' }}
        camera={{ 
          center: {
          latitude: init[1].latitude,
          longitude: init[1].longitude,
      },
      pitch: 67,
      heading: 0,
      altitude: 45,
      zoom: 16
   }}
        mapType='standard'
        showsUserLocation = {true}>
     {!marker?
     markerInfo.map((item,index)=>
              {
                return (
               <CusMarker navFn={()=>nav.push('Location details',{'item': item})} key={`itemn${index}`} desc={`${(item[0]["rank"]*100).toFixed(2)} / 10`} title={item[0]["שם המתקן"]} coor={item[1]}/>)})
               :
               <CusMarker navFn={()=>nav.push('Location details',{'item': marker})} desc={`${(marker[0]["rank"]*100).toFixed(2)} / 10`} title={marker[0]["שם המתקן"]} coor={marker[1]}/>
               }           
      </MapView>
    </View>
  );
};
export default Map;
const styles = StyleSheet.create({
  container: {
    margin:15,
    flex: 1,
    height:700,
    justifyContent:'center',
    width:'100%',
  },
  containerB: {
    margin:15,
    flex: 1,
    height:250,
    justifyContent:'center',
    width:'100%',
  },
});
const CusMarker = ({coor,title, desc, navFn}) => {
  return (
              <Marker
                onPress={navFn}
                coordinate={coor}
                title={title}
                description={desc}>
                    <MapIconButt icon={'sports-soccer'} />  
                  </Marker>   
  )
}