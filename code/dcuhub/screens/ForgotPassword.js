
import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Alert} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StatusBar } from 'expo-status-bar'
import * as firebase from 'firebase'
import {SafeAreaView} from 'react-native-safe-area-context'

import Button2 from '../shared/button_2'
import Button1 from '../shared/button_1'

const DeviceHeight = Dimensions.get('screen').height

export default class ForgotPassword extends React.Component{

    state = {
        email: ""
    };
    
    forgotPassword = () => {
        firebase.auth().sendPasswordResetEmail(this.state.email)
          .then(function () {
            Alert.alert('Email Confirmation','Check your email to change your password.')
          }).catch(error => this.setState({errorMessage: error.message}))
        }

    render() {
        return (
            <SafeAreaView style={styles.container}>
            <StatusBar style="auto"/>
            <KeyboardAwareScrollView>
    
                <View style={styles.image_view}>  
                    <Image 
                    source={require("../assets/images/dcuhublogo_higherres.png")}
                    resizeMode="contain"
                    resizeMode="center"
                    style={styles.image_style}>
                    </Image>
                </View> 

                {/* firebase error messages should pop up here */}
                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error_txt}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.placeholder_style}>
                    <TextInput 
                        style={styles.placeholder_text}
                        placeholder="enter your dcu email address" onChangeText={email => this.setState({email})}
                        value={this.state.email}/> 
                </View>

                <View>
                    <Button2 text='RESET' onPress={this.forgotPassword}/>
                </View>

                <View style={{marginBottom: 30}}>
                    <Button1 text='LOG IN'  onPress={ () => this.props.navigation.navigate('Login')}/>
                </View>

            
            </KeyboardAwareScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        height: DeviceHeight,
        backgroundColor: "white"
    },
    placeholder_style: {
        marginHorizontal:40,
        borderWidth: 1.5,
        marginTop: 20,
        paddingHorizontal: 10,
        borderColor:"#25afcd",
        borderRadius: 10,
        paddingVertical: 10 // size of the placeholder
    }, 
    placeholder_text: {
        paddingHorizontal:10
    }, 
    errorMessage: {
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30,
        marginTop: -20,
        marginBottom: 0
    },
    error_txt:{
        color: "#d40059",
        fontSize: 15,
        fontWeight: "600",
        textAlign: "center"
    },
    image_style: {
        width: Dimensions.get('screen').width, 
        height: Dimensions.get('screen').height / 2
    },
    image_view: {
        alignSelf: 'center',
        justifyContent: 'center'
    }
})
