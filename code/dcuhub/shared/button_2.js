import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

// this button is pure orange

export default function Button2({text, onPress }){
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{
                marginHorizontal: 100,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 30,
                backgroundColor: "orange",
                paddingVertical: 8,
                borderRadius: 20
                }}>
                <Text style={{
                    color: "white",
                    fontSize: 20
                }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}   