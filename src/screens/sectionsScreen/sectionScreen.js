
import React from 'react';
import{Text,SafeAreaView,View,TouchableOpacity,Image,FlatList} from 'react-native';
import DepartmentIcon from '../../components/departmenticon/departmenIcon';
import styles from './sectionScreenStyle';
import strings from '../../localize/index';
import DrawerItem from '../../components/draweritem/draweritem';
import { verticalScale, scale, moderateScale } from '../../helper/scaling';

const data =  [
    {"sectionName": "electronics", "sectionIcon": require("../../assets/photos/11.png"), "sectionItems":[{"itemName":"phones","extraData":[{"productName":"product","price":"100 sr","image":require("../../assets/photos/N11045962A_1.png")},{"productName":"product","price":"50 sr","image":require("../../assets/photos/N11045962A_1.png")}]},{"itemName":"laptop","extraData":[]}]},
    {"sectionName": "beauty", "sectionIcon": require("../../assets/photos/11.png"), "sectionItems":[{"itemName":"clothes","extraData":[]},{"itemName":"shoes","extraData":[]}]},
    {"sectionName": "sounds", "sectionIcon": require("../../assets/photos/11.png"), "sectionItems":[{"itemName":"headphones","extraData":[]},{"itemName":"speakers","extraData":[]}]}
]
export default class sectionScreen extends React.Component {
    state = {
        sectionIndex: 0
    }

    renderSectionItem=({item,index}) => {
        let img = item.sectionIcon;
        return (
            <DepartmentIcon 
                key={index}
                name={item.sectionName}
                image={img}
                onClick={() => this.setState({
                    sectionIndex: index
                })}
                pressed={this.state.sectionIndex === index}
            />
        )
    }

    renderSubSectionItems=({item}) =>{
        return(
            <DrawerItem
                text={item.itemName} 
                textStyle={{fontSiza:moderateScale(14),color:'#4B6584'}}
                onClick={()=>{this.props.navigation.navigate('sectionDetailsScreen',{itemname:item.itemName,extradata:item.extraData})}}
            />
        )
    }
    render() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity onPress={()=>{this.props.navigation.openDrawer()}}>
                    <Image style={styles.menuBottom}  source={require('../../assets/photos/More.png')}/>
                </TouchableOpacity>
                <Text style={styles.navTitle}>{strings.sections}</Text>
                <Image style={styles.cartBottom}  source={require('../../assets/photos/Cart.png')}/>
            </View>
            <View style={styles.sectionContainer}>
                <FlatList
                    style={styles.section}
                    numColumns={1}
                    data={data}
                    renderItem={this.renderSectionItem}
                    ItemSeparatorComponent={() => <View style={{height: verticalScale(20)}}/>}
                    //to re-render the whole list cause flat list doesn't render itself because of performance
                    //take the changable value like sectionIndex 
                    extraData={this.state.sectionIndex}
                />
                <View>
                    <View style={styles.sectionTitleView}>
                        <Text style={styles.sectionTitle}>{data[this.state.sectionIndex].sectionName}</Text>
                    </View>
                    <FlatList
                    style={styles.insection}
                    contentContainerStyle={styles.subSectionContainerStyle}
                    ItemSeparatorComponent={() => <View style={{height: verticalScale(20)}}/>}
                    data={data[this.state.sectionIndex].sectionItems}
                    renderItem={this.renderSubSectionItems}
                    />
                    
                </View>
            </View>
        
        </SafeAreaView>
    )}};