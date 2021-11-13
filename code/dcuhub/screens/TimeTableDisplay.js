
import React, {useState, useEffect} from 'react'
import {Text, View, StyleSheet, Image, Dimensions, TextInput, Button, TouchableOpacity} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StatusBar } from 'expo-status-bar';
import { AntDesign, Ionicons, Entypo } from '@expo/vector-icons'; 
import Header from '../shared/header'
import * as firebase from 'firebase' 

const DeviceHeight = Dimensions.get('screen').height
const DeviceWidth = Dimensions.get('screen').width

export default function TimeTableDisplay (props) {

    const [NFname, setName] = useState('')
    const classesListData = props.navigation.getParam('timeTable')
    const jsDateFormat = props.navigation.getParam('JsonDate')
    const dayString = props.navigation.getParam('dayName')

    const display = () => {
        const displayname = firebase.auth().currentUser.displayName
        return displayname
    }

    useEffect(() => {

        let currentUserUID = firebase.auth().currentUser.uid

        firebase
        .firestore()
        .collection('userProfile')
        .doc(currentUserUID)
        .get()
        .then((doc) =>{ if(!doc.exists){
            console.log('user has no information saved in the database.')
        }
        else{
            let dataObj = doc.data();
            setName(dataObj.firstName)
        }})
    }, [])
         
    const formatDate = (date) => {
        // 2021-02-23T00:00:00.000Z JSDATE
        const listOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        const dateSplit = date.split("T")[0].split("-")                 // ['2021', '02', '22'] Y/M/D
        const getMonth = listOfMonths[parseInt(dateSplit[1] - 1)]       // zero indexed
        const getDay = dateSplit[2]
        const getYear = dateSplit[0]
        return `${getDay} ${getMonth} ${getYear}`
    }

    const hourFormat = (hour) => {
        return hour.split('T')[1].substring(0, 2)
    }

    const formatTime = (date) => {
        return date.split('T')[1].substring(0, 5)
    }

    const sortClasses = classesListData.sort((a, b) => {
        const firstHour = hourFormat(a.StartDateTime)
        const secondHour = hourFormat(b.StartDateTime)
        return firstHour - secondHour
    })

    // displays module name + code, event type, time, lecturer, location
    const classInfo = sortClasses.map((item, index) => {
        return <View key={index} style={{width: DeviceWidth, borderBottomWidth: .5,  borderColor: 'black'}}> 
                    
                    <Text style={{fontWeight: '700', color: '#25afcd', marginTop: 15, paddingHorizontal: 5}}> <AntDesign name="profile" size={15} color="black" /> {item.ExtraProperties[0]['Value']}</Text>
                    
                    {item.EventType == 'Synchronous (Online, live)' ?
                    <Text style={{fontStyle: 'italic', color: 'green', marginTop: 3, paddingHorizontal: 10}}>{item.EventType}</Text> :
                    <Text style={{fontStyle: 'italic', color: 'orange', marginTop: 3, paddingHorizontal: 10}}>{item.EventType}</Text>
                    }
                    
                    <Text style={{marginTop: 5, paddingHorizontal: 5}}> <AntDesign name="clockcircleo" size={15} color="black"/>   {formatTime(item.StartDateTime)} - {formatTime(item.EndDateTime)}</Text>
                    
                    <Text style={{marginTop: 5, paddingHorizontal: 5}}> <Ionicons name="person" size={15} color="black" />   {item.ExtraProperties[1]['Value']}</Text>
                    
                    <Text style={{marginBottom: 15, marginTop: 5, paddingHorizontal: 5}}> <Entypo name="location-pin" size={15} color="black" />   {item.Location !== null ? item.Location : <Text>Stay at home for now</Text>}</Text>
                </View>
    })

    return (
        <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView>
        <StatusBar style="auto"/>
        
            <Header title="TIMETABLE"/>

            {/* TIMETABLE DETAILS BELOW */}
            <Text style={{fontSize: 15, textAlign: 'center', marginBottom: 10, fontStyle: 'italic'}}>Hey, {NFname == '' ? display() : NFname}! Here's your timetable for</Text>
            <Text style={{fontSize: 18, textAlign: 'center', color: 'orange', fontWeight: '700', marginTop: 0}}>{dayString.toUpperCase()} - {formatDate(jsDateFormat)}</Text>
            
            {/* CALL CLASS INFO HERE */}
            <View style={{marginTop: 40, alignSelf: 'center'}}>
                <Text>
                    {classesListData.length !== 0 ? <View style={{borderTopWidth: .3, marginTop: 40}}>{classInfo}</View>: 
                    <Text style={{fontWeight: '700', textAlign: 'center', fontSize: 20}}>NO CLASSES TODAY</Text>} 
                </Text>
            </View>

            {/* back / exit button */}
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <View style={styles.exit_button}>
                    <Text style={{color: "#f4a446", fontSize: 20}}>EXIT</Text>
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
        height: DeviceHeight,
    },
        image_style: {
        width: 100, 
        height: 100,     
    },
    exit_button: {
        marginHorizontal: 130,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        borderWidth: 2,
        borderColor: "#f4a446",
        paddingVertical: 5,
        borderRadius: 20,
        marginBottom: 25
    }
})
