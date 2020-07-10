import React from 'react';
import {Text,View,SafeAreaView, TouchableOpacity, I18nManager,Image,StyleSheet} from 'react-native';
import {scale,verticalScale,moderateScale} from '../helper/scaling';


function ItemIcon({image,product,category,price}){
    return(
        <View style={styles.container}>
            <View style={styles.priceview}>
                <Text style={styles.price}>{price}</Text>
            </View>
            <Image style={styles.image} source={image}/>
            <Text style={styles.product} numberOfLines={1}> {product} </Text>
            <Text style={styles.category} numberOfLines={1}> {category}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      width:scale(106.81),
      height:verticalScale(143),
      backgroundColor:'white',
      borderRadius:15,
      flexDirection:'column',
      justifyContent:'center',
      marginLeft:scale(20),
     
     
    },
    priceview:{
        width:29,
        height:29,
        borderRadius:14.5,
        backgroundColor:'#FFDD00',
        justifyContent:'center',
        alignItems:'center',
        marginLeft:scale(10),
       
    },
    image:{
      width: scale(76.34),
      height: verticalScale(103.57),
      resizeMode: 'contain',
      marginBottom:verticalScale(-20),
      marginLeft:scale(10),
      
    },
    product:{
        textAlign:'left',
        marginTop:verticalScale(5),
        maxWidth:scale(55)
    },
    category:{
        textAlign:'left',
        maxWidth:scale(55)
    },
    price:{
        fontSize:8,
    }
  
  });
  export default ItemIcon;