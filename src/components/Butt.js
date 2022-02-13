import React,{useState, useEffect} from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Marker } from "react-native-maps";
import { MaterialIcons } from '@expo/vector-icons'
export const Butt = ({fn, str, style}) =>{
    return(
    <TouchableOpacity style={style[0]} onPress={fn}>
        <Text style={style[1]}>{str}</Text>
    </TouchableOpacity >)
  }
export const IconButt = ({icon, fn1}) => {
    const [color, setColor] = useState(true)
    function handleFilter(){
        if(color){
        setColor(!color)
        fn1()}
        else {
        setColor(!color)
        fn1()}
    }
    return (
    <TouchableOpacity style={{marginHorizontal:6}} onPress={()=>handleFilter()}>
        <MaterialIcons name={icon} size={50} color={ color ? 'black':'blue' }/>
    </TouchableOpacity >
    )
}  
export const MapIconButt = ({icon}) => {
    
    return (
    <View style={{flex:1,alignItems:'center' ,justifyContent:'space-around'}}>
        <MaterialIcons name={icon}  size={35} color={icon=="sports-basketball"?"orange":'black'}/>  
       
        <MaterialIcons name='arrow-downward' size={35} color={icon=="sports-basketball"?"orange":'black' } />
    </View>
    )
}  
