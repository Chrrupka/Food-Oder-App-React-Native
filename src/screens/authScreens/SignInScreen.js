import React,{useState, useRef, useContext} from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput, Alert } from "react-native";
import {colors, parameters, title} from '../../global/styles';
import { Icon, Button, SocialIcon } from '@rneui/themed';
import Header from '../../components/Header';
import * as Animatable from 'react-native-animatable';
import {Formik} from "formik";
import auth from '@react-native-firebase/auth';
import { SignInContext } from "../../context/authContext";
import { GoogleSignin } from 'react-native-google-signin';
GoogleSignin.configure({
  webClientId: "AIzaSyC_rtFkytxL1rnAVuCbDMHHtCt3q3SWwHw",
  offlineAccess: true,
});


export default function SignInScreen({navigation}){

  const {dispatchSingedIn} = useContext(SignInContext)
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [textInputToFossued, setTextInputToFossued] = useState(true);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);


  async function signIn(data){
    try {
      const { password, mail } = data
      const user = await auth().signInWithEmailAndPassword(mail, password)
      if (user) {
        navigation.navigate("HomeScreen")

      }
    }catch(error){
      //console.log(error)

      Alert.alert(error.name, error.message)
    }
  }

  async function signInWithGoogle() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
      await auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
  }



  return(
    <View style={styles.container}>


      <Header  type='arrow-left' navigation = {navigation}/>
      <View style={{marginLeft:20, marginTop:10}}>
        <Text style = {title}>Logowanie</Text>
      </View>


      <Formik
        initialValues={{mail:'', password:''}}
        onSubmit={(values)=>{
          signIn(values)
        }}>
        {(props)=>
          <View>
            <View style={{ marginTop:20}}>
              <View style={{paddingLeft:20, marginTop:10}}>
                <Text style={styles.text1}>E-mail</Text>
              </View>
              <View>
                <TextInput
                  style={styles.textInput1}
                  placeholder="Wpisz swój e-mail"
                  placeholderTextColor={colors.grey4}
                  ref = {textInput1}
                  onChangeText={props.handleChange('mail')}
                  value={props.values.mail}

                />
              </View>
              <View style={{paddingLeft:20, marginTop:10}}>
                <Text style={styles.text1}>Hasło</Text>
              </View>
              <View style = {styles.textInput2}>
                <TextInput
                  style={{width:"80%"}}
                  placeholder="Podaj hasło"
                  placeholderTextColor={colors.grey4}

                  ref = {textInput2}
                  onChangeText={props.handleChange('password')}
                  value={props.values.password}
                  secureTextEntry={!passwordVisible}

                />
                <Animatable.View>
                  <Icon
                    name={textInputToFossued ? "visibility-off" : "visibility"}
                    iconStyle={{ color: colors.grey3 }}
                    type="material"
                    style={{ marginRight: 10 }}
                    onPress={() => {
                      setTextInputToFossued(!textInputToFossued);
                      setPasswordVisible(!passwordVisible);
                    }}
                  />
                </Animatable.View>
              </View>
            </View>

            <View style={{marginHorizontal:20, marginTop:30}}>
              <Button
                title = "Zaloguj"
                buttonStyle = {parameters.buttonStyle}
                titleStyle = {parameters.buttonTitleStyle}
                onPress={props.handleSubmit}
                />
            </View>
          </View>
        }
      </Formik>

      <View style={{alignItems:"center", marginTop:20, marginBottom:20}}>
        <Text style={{fontSize:20, fontWeight:"bold"}}>lub</Text>
      </View>

      <View style={{marginHorizontal:10, marginTop:10}}>
        <SocialIcon
          title = "Zaloguj się z Google"
          button
          type = "google"
          style = {styles.socialIcon}
          onPress={() => {
            signInWithGoogle()
          }}
        />
      </View>
      <View style={{marginLeft:20, marginTop:20, alignItems:"center"}}>
        <Text style={colors.grey1}>Nie masz konta?
          <Text
            style={{...styles.text1, color: colors.colorAccent, textDecorationLine: 'underline'}}
            onPress={() => navigation.navigate('SignUpScreen')}
          > Zarejestruj się</Text>
        </Text>
      </View>

    </View>
  )
}



const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"white"
  },
  text1:{
    color:colors.colorAccent,
    fontSize:16
  },
  textInput1:{
    borderBottomWidth:1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    marginBottom: 20,
    paddingLeft:0,
    color:colors.grey3
  },
  textInput2:{
    borderBottomWidth:1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent:"center",
    alignItems: "center",
    paddingLeft:0
  },
  socialIcon:{
    borderRadius: 12,
    height: 50,
    width: '100%'
  },

})
