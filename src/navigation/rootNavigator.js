import React, {useContext} from "react";
import {NavigationContainer} from "@react-navigation/native";
import AppStack from "./appStack";
import AuthStack from "./authStack";
import { SignInContext } from "../context/authContext";



export default function RootNavigator(){

  const {signedIn }=useContext(SignInContext)


  return(
    <NavigationContainer>
      {
        signedIn.userToken === null ? <AuthStack/> : <AppStack/>
      }
    </NavigationContainer>
  )
}
