import React,{useContext} from 'react';
import { GymContext } from '../../ContextAPI/CreateGymContext';
import { StyleSheet, View} from 'react-native';
import colors from "../constants/colors";
import { Butt } from './Butt';

const Footer = () => {
    const {state,handleFetch} = useContext(GymContext)
    const nextList = state.loading ? 'Loading' : state.data[0].next.slice(91);
    const prevList = state.loading ? 'Loading' : state.data[0].start.slice(91);
    return (
       <View style={styles.con}>
           <Butt str={'הבא'} style={[styles.Bcontainer,styles.text]} fn={()=>handleFetch(nextList)}/>
           <Butt str={'הקודם'} style={[styles.Bcontainer,styles.text]} fn={()=>handleFetch(prevList)}/>
       </View>
         )}
export default Footer
const styles = StyleSheet.create({
            Bcontainer: {
                backgroundColor: colors.primary,
                paddingVertical: 3,
                borderRadius: 6,
                borderWidth: 1,
                marginHorizontal:27,
                width:130,
                height:34 ,
                borderColor: colors.primary,
              },
           
            text: {
                color: colors.white,
                alignSelf: 'center',
                fontSize: 18,
                fontWeight: '500',
              },
             con:{
                flex:0.06,
                flexDirection:'row',
                height:15,
                backgroundColor:'transparent',
                justifyContent:'space-between'
            },             
        })