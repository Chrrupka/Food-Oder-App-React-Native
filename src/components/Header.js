import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {colors, parameters} from '../global/styles';

import { Icon } from '@rneui/themed';


export default function Header({title,type, navigation}) {
  return(
    <View style = {styles.header}>
      <View style={{marginLeft:20}}>
        <Icon
          type = "material-community"
          name ={type}
          color={colors.headerTextt}
          size = {28}
          onPress={()=>{navigation.goBack()}}
          />
      </View>
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    paddingTop:10,
    height: parameters.headerHeight,
  },
  headerText:{
    color:colors.headerTextt,
    fontSize: 22,
    fontWeight:"bold",
    marginLeft:30,
  }
});
