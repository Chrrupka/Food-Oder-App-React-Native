import React from 'react';
import {View, Text, StyleSheet, StatusBar} from "react-native";
import { colors } from "./src/global/styles";
import RootNavigator from "./src/navigation/rootNavigator";
import { SignInContextProvider } from "./src/context/authContext";


export default function App(){
  return(
    <SignInContextProvider>

      <View style = {styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor= {colors.statusbar}
          />
        <RootNavigator />
      </View>
    </SignInContextProvider>
  )
}

const styles = StyleSheet.create({
  container: {flex:1}
})
