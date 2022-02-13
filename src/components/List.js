import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import colors from '../constants/colors';
import { ListItem, ListSeparator } from '../components/ListItems';
import { useNavigation } from '@react-navigation/native';
export const List = ({list, grow}) => {
  
  const navigation = useNavigation()
  return (
    <FlatList
      style={grow == 0?styles.container: styles.containerA}
      data={list}
      keyExtractor={item => item._id}
      renderItem={({ item }) => (
        <ListItem
          title={item['שם המתקן']}
          subtitle={`${item["שכונה-רובע"]} ${item['רחוב']} ${item["מספר בית"]}`}
          onPress={() => navigation.push('Location details',{'item': item})}
        />
      )}
      ItemSeparatorComponent={ListSeparator}
      ListHeaderComponent={ListSeparator}
      ListFooterComponent={ListSeparator}
    />
    
  );
};

const styles = StyleSheet.create({
  container: {
    opacity:0.6,
    flexGrow:0,
    backgroundColor: colors.background,
    paddingTop:0,
  },
  containerA: {
    flex:1,
    flexGrow:1,
    backgroundColor: colors.background,
    paddingVertical: 6,
    paddingTop:0,
  },
});
