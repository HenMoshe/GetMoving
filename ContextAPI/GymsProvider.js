import React, { useState } from 'react';
import { GymContext } from './CreateGymContext'
import { useEffect, useReducer } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Reducer from './Reducer';
import {API_KEY} from '@env'
import axios from 'axios'
const gymsdata = { loading: true, gymlist: [], data: [], favs: [] }
async function getData(){
    let keys = []
    let values;
    try {
      keys = await AsyncStorage.getAllKeys()
      values = await AsyncStorage.multiGet(keys)
      return await JSON.stringify(values)
    } 
    catch(e) {
      console.error(e)
    }
  }
function GymProvider({children}){
    const [markerInfo, setMarkerInfo] = useState([]) 
    const [state, dispatch] = useReducer(Reducer,gymsdata)
    function handleFetch(city="פסגת"){
        axios.get(`https://data.gov.il/api/3/action/datastore_search?resource_id=2304b5de-c720-4b5c-bbc7-4cbab85e0ae8&limit=6&q=${city}&distinct=true`)
            .then((res)=>{
                dispatch({type: 'load', res: [res.data.result.records, [res.data.result._links, res.data.result.total]]})
                handleMarkers(res.data.result.records) 
        }).catch((error)=>console.error(error))}
    async function handleMarker(addressItem){
      let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressItem}&key=${API_KEY}`
      const markerItem = await axios.get(url)
      return {'latitude' :await markerItem.data.results[0].geometry.location.lat,'longitude':await markerItem.data.results[0].geometry.location.lng}} 
                           
    function handleFavs(){
        getData()
            .then((res)=>JSON.parse(res))
                .then((Parsedres)=> dispatch({type:'fetchfave',res: Parsedres.map((item)=>JSON.parse(item[1]))}))
                    .catch((error)=> console.error(error))
    }
    function removeOne(key){
        AsyncStorage.removeItem(key)
            .then(()=>handleFavs())
                .catch((error)=>console.error(error))
    }
    async function removeAll(){
        let keys = [];
        try {
          keys = await AsyncStorage.getAllKeys()
                 await AsyncStorage.multiRemove(keys)
                 dispatch({type:'unfave', res:[]})
        } 
        catch(e) {
          console.error(e)
        }}
    async function storeData(key,value){
        try {
           const jsonValue = JSON.stringify(value)
           await AsyncStorage.setItem(`${key}`, jsonValue)
           dispatch({type:'addfave',res: value})
          } 
        catch (e) {
           console.error(e)
             }
           }       
    function filterBy(type,gymlist){
        gymlist = gymlist.filter((item)=> item["שם המתקן"].includes(type))
        dispatch({type:'filter', res: gymlist})
    }
    async function handleMarkers(list){
        let addresses = list.map((item)=>[item, `${item["רשות מקומית"]||item["ישוב"]} ${item['שכונה-רובע']} ${item['רחוב']} ${item['מספר בית']}`.split(' ').join('+')])
        addresses = await Promise.all(
          addresses.map(async(item)=>{
             return [item[0] ,await handleMarker(item[1])]
            })
        )
        setMarkerInfo(await addresses)
    }
    useEffect(()=>
    {
        if(gymsdata.loading)
        {
        handleFetch()
        handleFavs()
        }
    },[])  
    return (
       <GymContext.Provider value={{state,markerInfo, handleFetch, handleFavs, removeAll, storeData, removeOne, filterBy}}>
           {children}
       </GymContext.Provider>
    )
}
export default GymProvider