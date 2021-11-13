import React, {useEffect, useContext, useState} from 'react'
import {View, Button, StyleSheet, Image, TouchableOpacity, Dimensions, Text, Alert, Linking} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import { Ionicons, FontAwesome5, Entypo } from '@expo/vector-icons'; 
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StatusBar } from 'expo-status-bar';
import {Title} from 'react-native-paper'
import * as firebase from 'firebase'

const DeviceHeight = Dimensions.get('screen').height
const DeviceWidth = Dimensions.get('screen').width

export default function UserProfile ({ navigation }) {
        
    const [firstName, setFirstName] = useState('')
    const [bio, setBio] = useState('')
    const [studentCode, setCode] = useState('')
    const [location, setLocation] = useState('')
    const [dayofbirth, setDOB] = useState('')
    const [link, setLink] = useState('')
    const [image, setImage] = useState(null) // for profile pic

    const [SignUpName, setName] = useState('')
    const [studentEmail, setEmail] = useState('')

    const signOutUser = async () => {
        await firebase.auth().signOut()
    }

    const getUserInfo = async () => {

        let currentUserUID = firebase.auth().currentUser.uid
        const displayname = firebase.auth().currentUser.displayName
        const email = firebase.auth().currentUser.email

        setName(displayname)
        setEmail(email)

        let doc = await firebase
            .firestore()
            .collection('userProfile')
            .doc(currentUserUID)
            .get()

        // if doc doesnt exist, not in database
        if(!doc.exists){
            console.log('no user profile data yet')
        } 
        else {
            let dataObj = doc.data();
            setFirstName(dataObj.firstName);
            setCode(dataObj.code);
            setBio(dataObj.bio);
            setLocation(dataObj.location);
            setDOB(dataObj.dayofbirth);
            setLink(dataObj.link);
            setImage(dataObj.image);
        }
    }

    useEffect(() => {
        getUserInfo()
    }, [])

    // for customized linkedin link
    const clik = (link) => {
        let combine = link.split(" ")
        const final = (combine[0] + combine[1]).toLowerCase()
        return final
    } 
    
    return (
        <SafeAreaView style={styles.container}>
        <StatusBar style="auto"/>
        <KeyboardAwareScrollView>

            <View>
                <Image 
                source={require("../assets/images/dcuhubfinalheader.png")}
                // resizeMode="contain"
                // resizeMode="center"
                style={{width: DeviceWidth}}>
                </Image>
            </View>

                    {/* user's profile picture, if statement */}
                    <View style={{
                        alignSelf: 'center',
                        width: 150,
                        height: 150,
                        borderRadius: 150 / 2,
                        backgroundColor: "white",
                        marginTop: -70
                    }}>
                        {image == null ? <Image source={{ uri: image }} style={styles.noImage_avatar}/> 
                        : <Image source={{ uri: image }} style={styles.withImage_avatar}/>}
                    </View>

                    <View style={{
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        paddingTop: 10,
                        }}>
                        {firstName == '' ? <Title style={styles.name}>{SignUpName}</Title> : <Title style={styles.name}>{firstName}</Title>} 
                        {studentCode == '' ? <View></View> : <Text style={styles.course}>{studentCode}</Text>}
                    </View>

                    
                    <Text style={{fontSize: 14, textAlign: 'center', marginTop: 8, marginBottom: 10, color: '#d40059'}}> 
                        <FontAwesome5 onPress={() => navigation.navigate('UpdateProfile')} name="user-edit" size={22} color="#d40059"/>
                    </Text>
                    
                    {/* BIO FOR THE USER */}
                    {bio == '' ? <View></View> :
                        <View style={{
                            alignSelf: 'center',
                            paddingHorizontal: 20,
                            paddingVertical: 5, 
                            borderWidth: .7,
                            borderColor: "orange",
                            borderRadius: 5,
                            marginTop: 10,
                        }}>
                            <Text style={{color: "grey", fontSize: 17}}>{bio}</Text>
                        </View>
                    }

                    {/* EMAIL this has no if statements since email is taken from registration*/}
                    <View style={styles.links}>
                        <View style={styles.row}>
                            <Ionicons name="ios-mail" size={20} color="#25afcd"/> 
                            <Text style={styles.text_info}>{studentEmail}</Text>
                    </View>


                    {link != '' && link.substring(0,28) == "https://www.linkedin.com/in/" ? 
                    <View style={styles.row}>
                        <FontAwesome5 name="linkedin" size={20} color="#25afcd" />
                        <Text style={styles.text_info} onPress={()=>{ Linking.openURL(link)}}>linkedin.com/in/{clik(firstName)}</Text>
                    </View> : <View></View>}

                    {dayofbirth == '' ? <View></View> : 
                    <View style={styles.row}>
                        <FontAwesome5 name="birthday-cake" size={20} color="#25afcd" />
                        <Text style={styles.text_info}>{dayofbirth}</Text>
                    </View>
                    } 

                    {location == '' ? <View></View> : 
                    <View style={styles.row}>
                        <Ionicons name="location-sharp" size={20} color="#25afcd" />
                        <Text style={styles.text_info}>{location}</Text>
                    </View>
                    }

                </View>

                <TouchableOpacity onPress={()=>{ Linking.openURL('https://loop.dcu.ie/')}}>
                        <View style={styles.button_loop}>
                            <Text style={{
                                color: "#25afcd",
                                fontSize: 20
                            }}>GO TO LOOP</Text>
                        </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Lists')}>
                    <View style={styles.button_white}>
                        <Text style={{
                            color: "#d40059",
                            fontSize: 20
                        }}>TO-DO LIST</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={signOutUser}>
                    <View style={styles.button_orange}>
                        <Text style={{color: "#f4a446", fontSize: 20}}>LOG OUT</Text>
                    </View>
                </TouchableOpacity>

        </KeyboardAwareScrollView>
        </SafeAreaView>

        )
    }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    avatar_image: {
        alignItems: 'center',
        marginTop: 50,
        backgroundColor: "yellow"
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      paddingBottom: 0
    },
    course: {
        fontSize: 20,
        fontWeight: '500',
        paddingBottom: 10
    },
    links: {
        alignSelf: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10, 
        borderWidth: 0,
        borderColor: "#777777",
        borderRadius: 1,
        marginTop: 10
    },
    text_info: {
      fontSize: 16,
      fontWeight: '500',
      color: '#777777',
      marginLeft: 30,
    
    },
    row: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    noImage_avatar: {
        alignSelf: 'center',
        width: 140,
        height: 140,
        borderRadius: 140 / 2,
        backgroundColor: "#25afcd",
        marginTop: 5
    },
    withImage_avatar: {
        alignSelf: 'center',
        width: 140,
        height: 140,
        borderRadius: 140 / 2,
        marginTop: 5
    },
    button_white: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        borderWidth: 2,
        borderColor: "#d40059",
        paddingVertical: 5,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginHorizontal: 90
    }, 
    button_orange: {
        marginHorizontal: 130,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        borderWidth: 2,
        borderColor: "#f4a446",
        paddingVertical: 5,
        borderRadius: 20,
        marginBottom: 50
    },
    button_loop: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        borderWidth: 2,
        borderColor: "#25afcd",
        paddingVertical: 5,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginHorizontal: 90
    }, 
    
  })

