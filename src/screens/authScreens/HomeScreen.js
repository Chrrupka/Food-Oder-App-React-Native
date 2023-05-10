import { Text, View, StyleSheet, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import { colors } from "../global/styles";
import React from "react";
import Header from "../../components/Header";
import { title } from "../../global/styles";

export default function HomeScreen({navigation}) {

  return(
    <View>
      <Header title ="My accout " type='arrow-left' navigation = {navigation}/>
        <View style={{marginLeft:20, marginTop:10}}>
          <Text style ={{color:"black"}}>Hello HomeScreen!!</Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  }
})
