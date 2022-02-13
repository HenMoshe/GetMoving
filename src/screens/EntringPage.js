import React, { useContext, useEffect } from "react"
import { StyleSheet, View, ImageBackground, Button } from "react-native"
import { GymContext } from "../../ContextAPI/CreateGymContext"
import SearchArea from "../components/SearchArea"
import { Text } from "../components/Text"
import colors from "../constants/colors"
import { List } from '../components/List'
import { Butt } from '../components/Butt'

function EnteringPage(){
    const { state,  removeAll } = useContext(GymContext)
    if(state.loading){
        return <Text>loading...</Text>
    } 
   
    return (
    <View style={styles.container}>
        <ImageBackground
          imageStyle={{opacity: 0.15}}
          style={styles.image}
          resizeMode='cover'
          source={{uri : "https://st2.depositphotos.com/3423429/9328/v/950/depositphotos_93280026-stock-illustration-sport-hand-drawn-seamless-pattern.jpg"}}>
              <Text type="header">Let's Get Moving!</Text>
              <Text type="subheader">כאן תוכלו למצוא את המקום הקרוב ביותר אליכם בו תוכלו לבצע את הספורט המועדף עליכם!</Text>
             <SearchArea type={1}/>
              <Text type="subheader"style={{ marginTop:10,fontFamily:'Inter_900Black' }}>מועדפים:</Text>
              {state.favs&&state.favs.length?
              <List grow={0} list = { state.favs }/>
                :
              <Text type="subheader"style={{marginTop:25,fontFamily:'Inter_900Black'}}>עיין במאגר והוסף את המגרשים האהובים עליך!</Text>
              }
              <Butt str={'איפוס מועדפים'} fn={()=>removeAll()} style={[styles.Bcontainer,styles.text]}/>
             
        </ImageBackground>   
    </View>

    )
}
export default EnteringPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        backgroundColor: colors.white,
      },
      image: {
        width:'100%',
        flex:1, 
         justifyContent:'flex-start', 
        alignItems:'center',
        height:'100%'
     
      },
      Bcontainer: {
        backgroundColor: colors.primary,
        alignItems:'center',
        paddingVertical: 3,
        marginVertical:5,
        borderRadius: 6,
        borderWidth: 1,
        width:135,
        shadowOffset:{width:100, height:100} ,
        shadowRadius:10,
        height:35 ,
        borderColor: colors.primary,
      },
   
    text: {
        color: colors.white,
        alignSelf: 'center',
        fontFamily:'Inter_900Black',
        fontSize: 13,
      
      },  
    
})