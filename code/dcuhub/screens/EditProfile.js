import React, {useState, useEffect} from 'react'
import {Text, View, StyleSheet, TextInput, Dimensions, TouchableOpacity, Image, Platform, Alert} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StatusBar } from 'expo-status-bar'
import * as ImagePicker from 'expo-image-picker'
import { Ionicons, FontAwesome, FontAwesome5, MaterialIcons, AntDesign } from "@expo/vector-icons"
import Header from '../shared/header'
import * as firebase from "firebase"
import "firebase/firestore";
import { registration } from '../API/firebaseMethods'



const DeviceHeight = Dimensions.get('screen').height
const DeviceWidth = Dimensions.get('screen').width

export default function Edit({ navigation }) {
        
    const [fullname, setFullName] = useState('')
    const [bio, setBio] = useState('')
    const [studentCode, setCode] = useState('')
    const [location, setLocation] = useState('')
    const [dayofbirth, setDOB] = useState('')
    const [link, setLink] = useState('')
    const [image, setImage] = useState(null) // for profile pic

    const getUserInfo = async () => {
        let currentUserUID = firebase.auth().currentUser.uid
        
        let doc = await firebase
        .firestore()
        .collection('userProfile')
        .doc(currentUserUID)
        .get()
    
        if (!doc.exists){
            console.log('no profile saved in the database. edit profile now')
        } else {
            let dataObj = doc.data();
            setFullName(dataObj.firstName)
            setCode(dataObj.code);
            setBio(dataObj.bio);
            setLocation(dataObj.location);
            setDOB(dataObj.dayofbirth);
            setLink(dataObj.link);
            setImage(dataObj.image);
        }
    }
    
    useEffect(() => {
        let mounted = false

        if(!mounted){
            getUserInfo()
        }
        
        return () => {
            mounted = true
        }
    
    }, [])

    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync()
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!')
                }
            }
        })

    }, [])

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            setImage(result.uri);
        }
    }

    const handlePress = async () => {
        let currentUserUID = firebase.auth().currentUser.uid

        const doc = await firebase
        .firestore()
        .collection('userProfile')
        .doc(currentUserUID)
        .get()
            registration(
                bio,
                fullname,
                studentCode,
                location,
                dayofbirth,
                link,
                image)
            navigation.navigate('Loading')      // loads the newly updated user profile
    }

    return (
            <SafeAreaView style={styles.container}>
            <StatusBar style="auto"/>
            <KeyboardAwareScrollView>
            <Header title="EDIT PROFILE"/>

                <View style={{position: "absolute", alignItems: "center", width:"100%", marginTop: 90}}>
                    <TouchableOpacity style={styles.avatarPlaceholder} onPress={pickImage}>
                        
                    {image && <Image source={{ uri: image }} style={styles.avatar} />}
                    
                    <Ionicons
                        name="ios-add"
                        size={40}
                        color="#FFF"
                        style={{ marginTop: 6, marginLeft: 2}}
                    ></Ionicons>
                    </TouchableOpacity>
                </View>

                {/* change profile picture text button
                    include firebase on this for updating pictures */}
                <View style={{
                    alignSelf: 'center',
                    marginTop: 150,
                    }}>
                    <Text style={{color: '#d40059', marginBottom: 20, marginTop: 15, fontSize: 16}} onPress={pickImage}>Change profile picture</Text>
                </View>
                
                {/* NAME  */}
                <View style={{
                        flexDirection: 'row',
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#f2f2f2',
                        paddingBottom: 5,
                        marginLeft: 20,
                        marginRight: 20
                }}>
                    <FontAwesome name="user-o" color="#25afcd" size={20} />
                    <TextInput
                        placeholder="Name"
                        placeholderTextColor="#666666"
                        value={fullname}
                        onChangeText={(name) => setFullName(name)}
                        autoCorrect={false}
                        style={{
                            flex: 1,
                            marginTop: Platform.OS === 'ios' ? 0 : -5,
                            paddingLeft: 10,
                            color: '#05375a',
                            fontSize: 18,
                            marginLeft: 20
                        }}/>
                    </View>
                
                {/* COURSE CODE */}
                <View style={{
                        flexDirection: 'row',
                        marginTop: 5,
                        marginBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#f2f2f2',
                        paddingBottom: 5,
                        marginLeft: 20,
                        marginRight: 20
                }}>
                    <MaterialIcons name="subject" size={24} color="#25afcd" />                        
                    <TextInput
                        placeholder="Course Code"
                        placeholderTextColor="#666666"
                        value={studentCode}
                        onChangeText={(Code) => setCode(Code)}
                        autoCorrect={false}
                        style={{
                            flex: 1,
                            marginTop: Platform.OS === 'ios' ? 0 : -5,
                            paddingLeft: 10,
                            color: '#05375a',
                            fontSize: 18,
                            marginLeft: 13
                        }}/>
                    </View>
                
                {/* BIO */}
                <View style={{
                        flexDirection: 'row',
                        marginTop: 5,
                        marginBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#f2f2f2',
                        paddingBottom: 5,
                        marginLeft: 20,
                        marginRight: 20
                }}>
                    <AntDesign name="profile" size={20} color="#25afcd" />                        
                    <TextInput
                        placeholder="Bio"
                        placeholderTextColor="#666666"
                        value={bio}
                        onChangeText={(bio) => setBio(bio)}
                        autoCorrect={false}
                        style={{
                            flex: 1,
                            marginTop: Platform.OS === 'ios' ? 0 : -5,
                            paddingLeft: 10,
                            color: '#05375a',
                            fontSize: 18,
                            marginLeft: 18
                        }}/>
                    </View>
                
                {/* DATE OF BIRTH */}
                <View style={{
                        flexDirection: 'row',
                        marginTop: 5,
                        marginBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#f2f2f2',
                        paddingBottom: 5,
                        marginLeft: 20,
                        marginRight: 20
                }}>
                    <FontAwesome5 name="birthday-cake" size={20} color="#25afcd" />
                    <TextInput
                        placeholder="Birthday"
                        placeholderTextColor="#666666"
                        value={dayofbirth}
                        onChangeText={(dayofbirth) => setDOB(dayofbirth)}
                        autoCorrect={false}
                        style={{
                            flex: 1,
                            marginTop: Platform.OS === 'ios' ? 0 : -5,
                            paddingLeft: 10,
                            color: '#05375a',
                            fontSize: 18,
                            marginLeft: 21
                        }}/>
                    </View>
                
                {/* AREA / LOCATION */}
                <View style={{
                        flexDirection: 'row',
                        marginTop: 5,
                        marginBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#f2f2f2',
                        paddingBottom: 5,
                        marginLeft: 20,
                        marginRight: 20
                }}>
                    <Ionicons name="location-sharp" size={22} color="#25afcd" />
                    <TextInput
                        placeholder="Location"
                        placeholderTextColor="#666666"
                        value={location}
                        onChangeText={(location) => setLocation(location)}
                        autoCorrect={false}
                        style={{
                            flex: 1,
                            marginTop: Platform.OS === 'ios' ? 0 : -5,
                            paddingLeft: 10,
                            color: '#05375a',
                            fontSize: 18,
                            marginLeft: 18
                        }}/>
                    </View>
                
                {/* LINKEDIN */}
                <View style={{
                        flexDirection: 'row',
                        marginTop: 5,
                        marginBottom: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#f2f2f2',
                        paddingBottom: 5,
                        marginLeft: 20,
                        marginRight: 20
                }}>
                    <FontAwesome5 name="linkedin" size={20} color="#25afcd" />
                    <TextInput
                        placeholderTextColor="#666666"
                        placeholder="Add link to profile"
                        value={link}
                        onChangeText={(link) => setLink(link)}
                        autoCorrect={false}
                        style={{
                            flex: 1,
                            marginTop: Platform.OS === 'ios' ? 0 : -5,
                            paddingLeft: 10,
                            color: '#05375a',
                            fontSize: 18,
                            marginLeft: 24
                        }}/>
                    </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginTop: 10
                }}>
                    {/* delete account button */}
                    <Text style={{color: '#d40059', marginTop: 10, alignSelf: 'center', fontSize: 16}} onPress={() => navigation.navigate('DeleteAcc')}>Deactivate Account</Text>

                    {/* change password button */}
                    <Text style={{color: '#d40059', marginTop: 10, alignSelf: 'center', fontSize: 16}} onPress={() => navigation.navigate('ChangeLoginPassword')}>Change Password</Text>
                </View>

                <View style={{
                    flexDirection: 'row', 
                    justifyContent: 'space-around',
                    marginTop: 50,
                    marginBottom: 50}}> 

                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.cancel_button}>
                        <Text style={{fontSize: 20, color: '#25afcd'}}>CANCEL</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button_orange} onPress={handlePress}>
                        <Text style={styles.panelButtonTitle}>SAVE</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAwareScrollView>
            </SafeAreaView>
    )
}
    
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        height: DeviceHeight
    },
    circle_avatar: {
        alignSelf: 'center',
        width: 120,
        height: 120,
        borderRadius: 120 / 2,
        backgroundColor: "#25afcd",
    },
    panelButtonTitle: {
        fontSize: 20,
        color: '#f4a446',
    },
    action: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },

    bio_text_style: {
        paddingLeft: 10,
        color: 'black',
        fontSize: 18,
        marginLeft: 25,
        marginRight: 20,
        paddingLeft: -10,
        marginLeft: 50
    },

    avatarPlaceholder: {
        width: 100,
        height: 100,
        backgroundColor: "#E1E2E6",
        borderRadius: 50,
        marginTop: 48,
        justifyContent: "center",
        alignItems: "center"
    },
    avatar: {
        position: "absolute",
        width: 100,
        height: 100, 
        borderRadius: 50,
        backgroundColor: "#E1E2E6",
        marginTop: 48,
        justifyContent: "center",
        alignItems: "center"
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button_orange: {
        marginHorizontal: 130,
        alignItems: "center",
        justifyContent: "center",
        // marginTop: 50,
        borderWidth: 2,
        borderColor: "#f4a446",
        paddingVertical: 5,
        borderRadius: 20,
        paddingHorizontal: 25
        // marginBottom: 50
    },
    cancel_button: {
        marginHorizontal: 130,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: "#25afcd",
        paddingVertical: 5,
        borderRadius: 20,
        paddingHorizontal: 15
    }
})
