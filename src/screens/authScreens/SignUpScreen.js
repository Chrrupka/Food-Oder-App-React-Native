import React,{useState} from 'react'
import { StyleSheet, Text, View,ScrollView,TextInput,Alert } from 'react-native'
import { colors, parameters, title } from "../../global/styles";
import Header from '../../components/Header'
import { Formik } from 'formik';
import {Icon,Button} from 'react-native-elements'
import * as Animatable from 'react-native-animatable';
import auth from '@react-native-firebase/auth';

const initialValues = {phone_number:'',name:"",password:"",email:'',username:''}


const SignUpScreen = ({navigation}) => {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [textInputToFossued, setTextInputToFossued] = useState(true);

  async function signUp(values){
    const {email,password} = values

    try{
      await auth().createUserWithEmailAndPassword(email,password)
      Alert.alert(
        'Konto utworzone pomyślnie',
        'Możesz się zalogować',
        [{text: 'OK', onPress: () => navigation.navigate('SignInScreen')}]
      )
    }catch(error){
      if(error.code === 'auth/email-already-in-use'){
        Alert.alert(
          'That email address is already inuse'
        )
      }
      if(error.code === 'auth/invalid-email'){
        Alert.alert(
          'That email address is invalid'
        )
      }
      else{
        Alert.alert(error.code)
      }
    }
  }

  return (
    <View style = {styles.container}>
      <Header  type ="arrow-left" navigation ={navigation}/>
      <ScrollView keyboardShouldPersistTaps = "always">
        <View style = {styles.view1}>
          <Text style ={title}>Rejestracja</Text>
        </View>
        <Formik initialValues ={initialValues} onSubmit = {(values)=>{signUp(values)}}>
          {(props)=>(
            <View style ={{ marginTop:20}}>
              <View style={{paddingLeft:20, marginTop:10}}>
                <Text style={styles.text1}>Numer Telefonu</Text>
              </View>
              <View >
                <TextInput
                  placeholder = "Wpisz swój numer telefonu"
                  placeholderTextColor={colors.grey4}
                  style = {styles.input1}
                  keyboardType ="number-pad"
                  autoFocus = {true}
                  onChangeText = {props.handleChange('phone_number')}
                  value = {props.values.phone_number}
                />
              </View>
              <View style={{paddingLeft:20, marginTop:10}}>
                <Text style={styles.text1}>Nazwa użytkownika</Text>
              </View>
              <View >
                <TextInput
                  placeholder = "Wpisz swoją nazwę"
                  placeholderTextColor={colors.grey4}
                  style = {styles.input2}
                  autoFocus = {false}
                  onChangeText = {props.handleChange('name')}
                  value = {props.values.name}
                />
              </View>
              <View style={{paddingLeft:20, marginTop:10}}>
                <Text style={styles.text1}>E-mail</Text>
              </View>
              <View style ={styles.input2}>
                <View>
                  <TextInput
                    placeholder = "Twój adres e-mail"
                    placeholderTextColor={colors.grey4}
                    style={{ flex:1}}
                    autoFocus = {false}
                    onChangeText = {props.handleChange('email')}
                    value = {props.values.email}
                  />
                </View>
              </View>
              <View style={{paddingLeft:20, marginTop:10}}>
                <Text style={styles.text1}>Hasło</Text>
              </View>
              <View style = {styles.input2}>
                <TextInput
                  style={{width:"80%"}}
                  placeholder="Podaj hasło"
                  placeholderTextColor={colors.grey4}
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


              <View style ={{marginHorizontal:20, marginTop:30}}>
                <Button
                  title = "Create my account"
                  buttonStyle = {parameters.buttonStyle}
                  titleStyle ={parameters.buttonTitleStyle}
                  onPress = {props.handleSubmit}
                />
              </View>
            </View>

          )}
        </Formik>
        <View style={{marginLeft:20, marginTop:20, alignItems:"center"}}>
          <Text style={colors.grey1}>Masz już konto?
            <Text
              style={{...styles.text1, color: colors.colorAccent, textDecorationLine: 'underline'}}
              onPress={() => navigation.navigate('SignInScreen')}
            > Zaloguj się</Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'white'
  },

  view1:{
    justifyContent:'center',
    alignItems:'flex-start',
    marginTop:10,
    marginBottom:10,
    paddingHorizontal:15
  },

  text1:{
    fontSize:15,
    color:colors.colorAccent,
  },


  input1:{
    borderBottomWidth:1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    marginBottom: 20,
    paddingLeft:0,
    color:colors.grey3
  },

  input2:{
    borderBottomWidth:1,
    borderColor: "#86939e",
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent:"center",
    alignItems: "center",
    paddingLeft:0
  },

})
