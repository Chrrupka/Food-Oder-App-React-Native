import React,{useState,useRef,useEffect,useContext} from 'react';

import {View, Text, StyleSheet, Dimensions,Image,ScrollView} from 'react-native'
import {colors, parameters,title} from "../../global/styles"
// import { SignInContext } from '../../contexts/authContext';
import auth from '@react-native-firebase/auth';
import Logo from '../../assets/logo.png';


import {Icon, Button,SocialIcon} from 'react-native-elements'

export default function WelcomeScreen({navigation}){
  const { width } = Dimensions.get('window');
  const logoSize = width * 0.8;
  return(
    <View style={{flex: 1, backgroundColor:"#7a7a7a"}} >

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingTop:80}}>
        <Image source={Logo} style={{ width: logoSize, height: logoSize, resizeMode: 'contain' }} />
      </View>

      <View style ={{flex:2, justifyContent:"flex-end", marginBottom:150}}>

        <View style ={{marginHorizontal:20, marginTop:30}}>
          <Button
            title ="Logowanie"
            buttonStyle = {parameters.buttonStyle}
            titleStyle = {parameters.buttonTitleStyle}
            onPress ={()=>{
              navigation.navigate("SignInScreen")
            }}
          />
        </View>

        <View style ={{marginHorizontal:20, marginTop:50}}>
          <Button
            title ="Rejestracja"
            buttonStyle ={styles.createButton}
            titleStyle ={styles.createButtonTitle}
            onPress ={()=>{navigation.navigate("SignUpScreen")}}
          />
        </View>

      </View>


    </View>
  )
}


const styles = StyleSheet.create({

  createButton:{
    backgroundColor:"#35424a",
    alignContent:"center",
    justifyContent:"center",
    borderRadius:6,
    borderWidth:1,
    height:50,
    paddingHorizontal:20,
    borderColor:"black",
  },

  createButtonTitle:{
    color:"white",
    fontSize:20,
    fontWeight:"bold" ,
    alignItems:"center",
    justifyContent:"center"  ,
    marginTop:-3
  }

})
