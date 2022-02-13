import { TextInput, StyleSheet, View } from "react-native"
import { Text } from './Text'
import colors from "../constants/colors"
import React, { useState, useContext } from "react"
import { GymContext } from "../../ContextAPI/CreateGymContext"
import { useNavigation } from "@react-navigation/native"
import {IconButt } from './Butt'

function SearchArea({type=''}){
    const nav = useNavigation()
    const { state, handleFetch, filterBy } = useContext(GymContext)
    const [search, setSearch] = useState('')
    if(state.loading)
    {
        return (
            <View style={styles.container}>
                <Text>Loading..</Text>
            </View>
        )
    }
    function handleSearch(){
        handleFetch(search||'ירושלים',)
        nav.navigate('Search results:')
    }
     return (<>
     <Text>חפש לפי עיר/שכונה..</Text>
        <TextInput 
            onChangeText={(e)=> setSearch(e)}
            onEndEditing={()=> handleSearch()} 
            value={search}
            placeholderTextColor={'white'} 
            placeholder="חפש במאגר..." 
            style={styles.input} />
       {type==1?<></>:<>    
        <Text>סנן לפי סוג מגרש..</Text> 
        <View style={styles.container}>    
     <IconButt icon={'sports-soccer'} fn={()=>filterBy('רגל', state.gymlist)} fn1={()=> handleFetch(search||'ירושלים')}/>
     <IconButt icon={'sports-basketball'}fn={()=>filterBy('סל', state.gymlist)}fn1={()=> handleFetch(search||'ירושלים')}/>
     <IconButt icon={'sports-tennis'}fn={()=>filterBy('טניס', state.gymlist)}fn1={()=> handleFetch(search||'ירושלים')}/>
     <IconButt icon={'sports-handball'}fn={()=>filterBy('כושר', state.gymlist)}fn1={()=> handleFetch(search||'ירושלים')}/>
     <IconButt icon={'pool'}fn={()=>filterBy('שחיה', state.gymlist)}fn1={()=> handleFetch(search||'ירושלים')}/>
        </View></>}  
            </> )
}
export default SearchArea
const styles = StyleSheet.create({
    input: {
        backgroundColor:colors.gray,
        height: 40,
        width:'80%',
        textAlign:'center',
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 3,
            },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        borderRadius:9,
      },
      container: {
        flexDirection:'row',
        paddingTop:0,
        padding: 7
      },  
})
