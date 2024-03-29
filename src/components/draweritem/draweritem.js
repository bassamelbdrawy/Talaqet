import React from 'react';
import {Text,View,SafeAreaView, TouchableOpacity, I18nManager,Image,StyleSheet} from 'react-native';
import {styles} from './draweritemstyle';


function DrawerItem({text,image, outerContainerStyle, innerContainerStyle,textStyle,key, onClick=() => {}}){
    return(
        <TouchableOpacity style={[styles.container, outerContainerStyle]} onPress={() => onClick()} key={key}>
            <View style={styles.imageAndTextContainer}>
            {
                image && <Image style={styles.itemicon} source={image}/>
            }
            <Text style={[styles.moreName,textStyle]}> {text} </Text>
            </View>
            <View style={[styles.moreImage, innerContainerStyle]}>
                <Image style={styles.arrowStyle} source={require('../../assets/photos/Path11.png')} />
            </View>
        </TouchableOpacity>
    )

}
  export default DrawerItem;