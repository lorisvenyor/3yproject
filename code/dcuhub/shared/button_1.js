import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

// this button is white

export default function Button1({text, onPress }){
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{
                marginHorizontal:100,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
                borderWidth: 2,
                borderColor: "#f4a446",
                paddingVertical: 5,
                borderRadius: 20
                }}>
                <Text style={{
                    color: "#f4a446",
                    fontSize: 20
                }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}   
