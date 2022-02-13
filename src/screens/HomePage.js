import { List } from "../components/List";
import React, {useContext,  useState} from 'react';
import { GymContext } from "../../ContextAPI/CreateGymContext";
import { StyleSheet, View } from 'react-native';
import Footer from "../components/Footer";
import { Butt } from "../components/Butt";
import colors from "../constants/colors";
import SearchArea from "../components/SearchArea";
import { Text } from "../components/Text";
import Map from "../components/Map";
function HomePage(){
    const { state } = useContext(GymContext)
    const [style, setStyle] = useState(true)
    if(state.loading)
    {
        return (
            <View style={styles.container}>
                <Text>Loading..</Text>
            </View>
        )
    }
    return (
    <View style={styles.container}>
        <SearchArea />
        <Butt str={'שנה תצוגה'} style={[{backgroundColor:colors.gray,borderRadius:15,padding:7 },{color:colors.primary}]} fn={()=>setStyle(!style)}/>
      {style?  
        <Map />
        :
        <>
        <List grow={1} list={state.gymlist}/>
        <Footer />
        </>
        }

    </View>
        
    )
}
export default HomePage
const styles = StyleSheet.create({
            container: {
              flex: 1,
              alignItems:'center',
              backgroundColor: colors.white,
              paddingTop:0,
              
              padding: 3
            },
            
        })
