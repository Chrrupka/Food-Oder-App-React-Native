import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

import React from "react";
import WelcomeScreen from "../screens/authScreens/WelcomeScreen";
import HomeScreen from "../screens/authScreens/HomeScreen";

const App = createStackNavigator();

export default function AppStack(){
  return(
    <App.Navigator>
      <App.Screen  name="HomeScreen" component={HomeScreen}
                   options={{
                     headerShown: false,
                     ...TransitionPresets.RevealFromBottomAndroid}} />

    </App.Navigator>
  )
}
