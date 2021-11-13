
import React from 'react'
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native'
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons'; 


const DeviceHeight = Dimensions.get('screen').height
const DeviceWidth = Dimensions.get('screen').width

export default function Header (props) {

    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: -10, marginTop: -10}} >
            <View style={{
                borderColor: "black",
                borderWidth: 0,
                paddingVertical: 0,
                paddingHorizontal: 20,
                borderRadius: 20,
                marginTop: 30,
                marginBottom: 30,
                backgroundColor: '#25afcd'
            }}>
                <Text style={{color: 'white', padding: 8, fontSize: 25}}>{props.title}</Text>     
            </View>
            <View>  
                <Image 
                source={require("../assets/images/dcuhublogo_higherres.png")}
                resizeMode="contain"
                resizeMode="center"
                style={{width: 110, height: 110}}>
                </Image>
            </View>
        </View>
    )
}
