import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import WelcomeScreen from "../screens/authScreens/WelcomeScreen";
import SignInScreen from "../screens/authScreens/SignInScreen";
import SignUpScreen from "../screens/authScreens/SignUpScreen";
import HomeScreen from "../screens/authScreens/HomeScreen";

const Auth = createStackNavigator();

export default function AuthStack(){
  return(
    <Auth.Navigator>
      <Auth.Screen name="WelcomeScreen" component={WelcomeScreen}
                        options={{
                          headerShown: false,
                          ...TransitionPresets.RevealFromBottomAndroid}} />

      <Auth.Screen name="SignInScreen" component={SignInScreen}
                        options={{
                          headerShown: false,
                          ...TransitionPresets.RevealFromBottomAndroid}} />
      <Auth.Screen name="SignUpScreen" component={SignUpScreen}
                   options={{
                     headerShown: false,
                     ...TransitionPresets.RevealFromBottomAndroid}} />

        <Auth.Screen  name="HomeScreen" component={HomeScreen}
                     options={{
                       headerShown: false,
                       ...TransitionPresets.RevealFromBottomAndroid}} />

    </Auth.Navigator>
  )
}
