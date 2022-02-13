import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';
import colors from '../constants/colors';


const styles = StyleSheet.create({
  text: {
/*     fontWeight:'bold' ,
 */    paddingHorizontal: 12,
    paddingVertical: 3,
    color: colors.primary,
    fontSize: 16,
    fontFamily:'Inter_400Regular' 
  },
  headerText: {
    fontWeight: '600',
    fontSize: 32,
    marginBottom: 12,
    fontFamily:'Inter_900Black'
  },
  subHeaderText: {
    color: colors.primary,
    fontSize: 20,
    marginBottom: 12,
    fontFamily:'Inter_500Medium',
    marginTop: -12, // assum this shows up under a headerText
  },
});

export const Text = ({ type, children, style = {} }) => {
 
  let textStyles = [styles.text];

  if (type === 'header') {
    textStyles.push(styles.headerText);
  } else if (type === 'subheader') {
    textStyles.push(styles.subHeaderText);
  }

  if (Array.isArray(style)) {
    textStyles = [...textStyles, ...style];
  } else {
    textStyles.push(style);
  }

  return <RNText style={textStyles}>{children}</RNText>;
};
