import React, {useContext, useState} from 'react';
import { GymContext } from '../../ContextAPI/CreateGymContext';
import { StyleSheet, View, Text, Linking} from 'react-native';
import { Butt } from '../components/Butt';
import Map from '../components/Map';
import colors from '../constants/colors';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage'

function SingleGym(props){
  const { storeData, removeOne } = useContext(GymContext)
  const [isFav, setIsFav] = useState('')
  const item = props.route.params.item[0]
  const coord = props.route.params.item[1]
  AsyncStorage.getItem(item["שם המתקן"])
    .then((res)=>setIsFav(res))
      .catch((error)=> console.error(error))
  return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.headerText}>{item["שם המתקן"]}</Text>
          <Text style={styles.headerText}>{item["סוג מתקן"]}</Text>
          {!isFav?
          <Butt style={[styles.Bcontainer,styles.text]} str={'הוסף למועדפים'} fn={()=>storeData(item["שם המתקן"],item)}/>
                :
          <Butt style={[styles.Bcontainer,styles.text]} str={'הסר ממועדפים'} fn={()=>removeOne(item["שם המתקן"])} />}
          <Map marker={[item,coord]}/>            
         <Text style={styles.textOne}>טלפון</Text>
          <Butt fn={()=>Linking.openURL(`tel:${item["טלפון איש קשר"]}`)} style={[styles.Acontainer,styles.textTwo]} str={`${item["טלפון איש קשר"]}`||"לא קיים במאגר."}/>
          <Text style={styles.textOne}>כתובת </Text>
          <Butt style={[styles.Acontainer,styles.textTwo]} str={`${item["רשות מקומית"]} ${item["ישוב"]} ${item['שכונה-רובע']} ${item['רחוב']} ${item['מספר בית']}`}/> 
          <Text style={styles.textOne}>פרטים</Text>
          <View style={styles.Dcontainer}>
            <Text style={styles.texter}>נגיש לנכים {item["נגישות לנכים"]}</Text>
            <Text style={styles.texter}>אורות {item["תאורה קיימת"]}</Text>
            <Text style={styles.texter}>גדרות {item['גידור קיים']}</Text>
            <Text style={styles.texter}>חניה {item['חניה לרכבים']}</Text>
            <Text style={styles.texter}>פנוי {item["פנוי לפעילות"]}</Text>
            <Text style={styles.texter}>ציון <Text>{(item['rank']*100).toFixed(2)}/10</Text></Text>
          </View>
          <Text style={styles.textOne}>אודות </Text>
            <View style={styles.Dcontainer}>
              <Text style={styles.texter}>מפעיל {item['גוף מפעיל המתקן']}</Text>
              <Text style={styles.texter}>מצב המתקן  {item["מצב המתקן"]}</Text>
              <Text style={styles.texter}>שייך לביה"ס {item["משרת בית ספר"]||"לא" }</Text>
              <Text style={styles.texter}> {item["מתקן תקני לתחרויות"]||'לא'}</Text>
              <Text style={styles.texter}>שנת הקמה : {item["שנת הקמה"]||"אין"}</Text>
            </View>
        </View>
      </ScrollView>
  )}
export default SingleGym

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    backgroundColor: colors.white,
  },
  Dcontainer:{
     flex:1, 
     flexDirection:'row',
     flexWrap:'wrap',
     paddingHorizontal:28,
     justifyContent:'space-evenly',
  },
  Bcontainer: {
    backgroundColor: colors.primary,
    alignSelf:'center',
    borderRadius: 6,
    borderWidth: 1,
     width:150,
     height:30 ,
    borderColor: colors.gray,
  },

text: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  textOne: {
    fontWeight:'bold' ,
    fontFamily:'Inter_500Medium',
    paddingHorizontal: 12,
    paddingVertical: 3,
    color: colors.primary,
    fontSize: 16,
  },
  textTwo: {
    alignSelf:'center',
    paddingVertical: 3,
    color: "blue",
    fontSize: 13,
  },
  headerText: {
    fontWeight: '600',
    fontSize: 19,
    fontFamily:'Inter_900Black',
    marginBottom: 7,
  },
  texter: {
    color: colors.primary,
    paddingHorizontal:15,
    paddingVertical:7,
    fontFamily:'Inter_400Regular'
  },
  
});
