
import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, TextInput, Button, TouchableOpacity, Alert, LogBox} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from '@expo/vector-icons/AntDesign'
import { StatusBar } from 'expo-status-bar'
import {SafeAreaView} from 'react-native-safe-area-context'
import * as firebase from 'firebase'

const DeviceHeight = Dimensions.get('screen').height

export default class DeleteAccount extends React.Component{
    
    state = {
        email: "",
        password: "",
        password2: "",
        errorMessage: null
    }

    handleAuth = () => {

        const {password,password2} = this.state

        const user = firebase.auth().currentUser
        const credential = firebase.auth.EmailAuthProvider.credential(user.email, password)

        // exception handling
        if(password == ""){
            Alert.alert("", "Please Enter a password.")
        } else if (password2 == ""){
            Alert.alert("","Please confirm your password.")
        }else if (password != password2){
            Alert.alert("","Passwords do not match.")
        } else{

        // Deleting user profile in database upon account deletion
        firebase.firestore().collection('userProfile').doc(user.uid).delete()

        user.reauthenticateWithCredential(credential)
        .catch(error => this.setState({ errorMessage: error.message}))
        
        firebase.auth().currentUser.delete().then(function() {
            console.log('user has deleted its account')
          }).catch(function(error) {
            console.log(error)
          })
        }
    }

    // for when user deletes account
    componentDidMount() {
        LogBox.ignoreLogs(["The user's credential is no longer valid. The user must sign in again."])
    }
    
    render() {
        return (
            <SafeAreaView style={styles.container}>
            <StatusBar style="auto"/>
            <KeyboardAwareScrollView>

                    {/* enter a password */}
                    <View style={{
                        flexDirection:"row",
                        alignItems:"center",
                        marginHorizontal:40,
                        borderWidth: 1.5,
                        marginTop: 150,
                        paddingHorizontal:10,
                        borderColor:"#25afcd",
                        borderRadius:10,
                        paddingVertical: 7
                    }}>
                        <Icon name="lock1" color="#25afcd" size={25}/>
                        <TextInput 
                            style={styles.placeholder_text}
                            secureTextEntry={true}  // SECURE PASSWORD ie hides the texts
                            placeholder="enter password"
                            onChangeText={password => this.setState({password})}
                            value={this.state.password}>
                        </TextInput>
                    </View>
                
                    {/* this is for confirming the password */}
                    <View style={{
                        flexDirection:"row",
                        alignItems:"center",
                        marginHorizontal:40,
                        borderWidth: 1.5,
                        marginTop:15,
                        paddingHorizontal:10,
                        borderColor:"#25afcd",
                        borderRadius:10,
                        paddingVertical: 7
                    }}>
                        <Icon name="lock1" color="#25afcd" size={25}/>
                        <TextInput 
                            style={styles.placeholder_text}
                            secureTextEntry={true}  // SECURE PASSWORD ie hides the texts
                            placeholder="confirm password"
                            autoCapitalize="none"
                            onChangeText={password2 => this.setState({password2})}
                            value={this.state.password2}
                            >
                        </TextInput>
                    </View>

                    <TouchableOpacity onPress={this.handleAuth}>
                        <View style={styles.confirm_button}>
                            <Text style={{color: "#f4a446", fontSize: 20}}>CONFIRM</Text>
                        </View>
                    </TouchableOpacity>
            
            </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        height: DeviceHeight,
        backgroundColor: "white"
    },
    pass_word: {
        flexDirection:"row",
        alignItems:"center",
        marginHorizontal:40,
        borderWidth: 1.5,
        marginTop:15,
        paddingHorizontal:10,
        borderColor:"#25afcd",
        borderRadius:10,
        paddingVertical: 7,
    },
    placeholder_text: {
        paddingHorizontal: 10
    }, 
    forgot_pass: {
        marginTop: 10,
        alignSelf: 'center'
    },
    confirm_button: {
        marginHorizontal: 120,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        borderWidth: 2,
        borderColor: "#f4a446",
        paddingVertical: 5,
        borderRadius: 20
    }
})

// colours 
// blue #25afcd
// orange #f4a446
// pink #d40059