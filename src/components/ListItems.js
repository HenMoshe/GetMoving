import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { Text } from './Text';
import colors from '../constants/colors';


const styles = StyleSheet.create({
  row: {
    paddingVertical: 1,
    backgroundColor: colors.white,
    alignItems:'center'
  },
  titleText: {
    fontFamily:'Inter_900Black',
  },
  separator: {
    margin: StyleSheet.hairlineWidth,
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.primary,
  },
});

export const ListItem = ({ title, subtitle, onPress = () => null }) => {
  const rowStyles = [styles.row];
  const iconName = title.includes('רגל')||title.includes('דשא')?'sports-soccer':title.includes('סל')?'sports-basketball'
                  :title.includes('טניס')?'sports-tennis':title.includes('כושר')||title.includes('ספורט')?'sports-handball'
                  :title.includes('שחי')?'pool':'sports-handball'
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={rowStyles}>
        <Text style={styles.titleText}>{title}</Text>
        <MaterialIcons name={iconName} size={24} color='black'/> 
        <Text>{subtitle}</Text>  
      </View>
    </TouchableOpacity>
  );
};

export const ListSeparator = () => <View style={styles.separator} />;
