import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  FlatList,
  Pressable,
  Image,
  Dimensions,
} from "react-native";
import { colors } from "../global/styles";
import Header from "../components/Header";
import { title } from "../global/styles";
import HomeHeader from "../components/HomeHeader";
import { filterData } from "../global/Data";
import React, { useState } from "react";
const SCREEN_WIDTH = Dimensions.get('window').width;

export default function HomeScreen({navigation}) {


  const [indexCheck, setIndexCheck] = useState("0")

  return(

    <View style = {styles.container}>
      <HomeHeader navigation={navigation} />
      <ScrollView stickyHeaderIndices = {[0]}
                  showsVerticalScrollIndicator = {true}
      >
        <View style ={styles.headerTextView}>
          <Text style ={styles.headerText}>Kategorie</Text>
        </View>

        <View>
          <FlatList
            horizontal ={true}
            showsHorizontalScrollIndicator ={false}
            data = {filterData}
            keyExtractor = {(item)=>item.id}
            extraData = {indexCheck}
            renderItem = {({item,index})=>(
              <Pressable
                onPress ={()=>{setIndexCheck(item.id)}}
              >
                <View style ={indexCheck === item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>
                  <Image
                    style = {{height:60,width:60,borderRadius:30}}
                    source = {item.image}
                  />

                  <View>
                    <Text style ={indexCheck === item.id ? {...styles.smallCardTextSected}:
                      {...styles.smallCardText}}>{item.name}</Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>

        <View style ={styles.headerTextView}>
          <Text style ={styles.headerText}>Proponowane</Text>
        </View>

      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center"
  },
  headerText:{
    color:colors.grey2,
    fontSize:24,
    fontWeight:"bold",
    paddingLeft:10,
  },
  headerTextView:{
    backgroundColor:colors.grey5,
    paddingVertical:3,
  },

  smallCard :{
    borderRadius:30,
    backgroundColor:colors.grey5,
    justifyContent:"center",
    alignItems:'center',
    padding:5,
    width:80,
    margin:10,
    height:100
  },

  smallCardSelected:{
    borderRadius:30,
    backgroundColor:colors.buttons,
    justifyContent:"center",
    alignItems:'center',
    padding:5,
    width:80,
    margin:10,
    height:100
  },

  smallCardTextSected :{
    fontWeight:"bold",
    color:colors.cardbackground
  },

  smallCardText :{
    fontWeight:"bold",
    color:colors.grey2
  },

  floatButton:{
    position:'absolute',
    bottom:10,right:15,
    backgroundColor:'white',
    elevation:10,
    width:60,height:60,
    borderRadius:30,
    alignItems:'center'
  }
})
