import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import  {colors} from '../global/styles'


const ProductCard = ({productName,price,image, screenWidth}) => {
  const handlePress=()=>{
    //navigation.navigate("PreferenceScreen")
  }

    return (

    <TouchableOpacity onPress={handlePress}>
      <View style ={{...styles.cardView,width:screenWidth}}>
        <Image
          style ={{...styles.image, width:screenWidth}}
          source = {{uri:image}}
          />

        <View>
          <View>
            <Text style ={styles.name}>{productName}</Text>
            <Text style ={styles.text1}>PLN{price}</Text>
          </View>

          <View style ={{flex:1, flexDirection:"row"}}>
          </View>
        </View>
      </View>

    </TouchableOpacity>
)
}

export default ProductCard

const styles = StyleSheet.create({

  view1: {backgroundColor:"white",
    elevation:4,
    shadowOpacity:0.4,
    shadowColor:"black",
    margin:5,
    width:210,
    padding:10
  },
  cardView:{
    marginHorizontal:9,
    borderTopRightRadius:5,
    borderTopLeftRadius:5,
    borderWidth:1,
    borderColor:colors.grey4,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
  },
  image:{
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    height:150,
  },

  name:{
    fontSize:17,
    fontWeight:'bold',
    color:colors.grey1,
    marginTop:5,
    marginLeft:10
  },

  view2: {flexDirection:"row",
    padding:0,
    justifyContent:"space-between"
  },

  view3 : {justifyContent:"space-between",
    width:110
  },

  text1: {
    fontSize:15,
    color:colors.grey1,
    marginTop:5,
    marginBottom:10,
    marginLeft:10
  },

  view4: {width:75,
    height:65
  },



})
