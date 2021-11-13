
import React, {useState, useEffect} from 'react'
import {Text, View, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity, Platform, Alert} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StatusBar } from 'expo-status-bar';
import DTPickerModal from 'react-native-modal-datetime-picker'
import axios from 'axios'
import Header from '../shared/header'
import * as firebase from 'firebase' 

const DeviceHeight = Dimensions.get('screen').height
const DeviceWidth = Dimensions.get('screen').width

export default function TimeTableHome (props) {

    // this is for the user input
    const [enteredCourseCode, setCourse] = useState('')
    const [enteredDate, setEnteredDate] = useState(new Date())
    const [classDetails, setClassDetails] = useState('')
    const [dateDisplay, setDisplay] = useState('')      // displaying the picked date on the button
    
    const apiURL = "https://dcuhub-2021-3project.herokuapp.com/"
    let payload = {course_code: enteredCourseCode, date: enteredDate}

    const getClassDets = async () => {
        try{            
            if(enteredCourseCode === ''){
                Alert.alert('Enter Course Code', 'please enter your course code and year e.g. CASE3')
            }
            else{
                const postResponse = await axios.post(apiURL, payload)
                const dataResponse = postResponse.data
                if(dataResponse === 'error in server'){
                    console.log('wrong course code / course code not found')
                    Alert.alert('Course Code Not Found', 'Please enter an approriate course code eg. CASE3')
                }else{
                    console.log('data ready to be displayed')
                    props.navigation.navigate('TimeTableDisplay', {timeTable: dataResponse.timetable, JsonDate: dataResponse.dateFormat, dayName: dataResponse.dayName})
                }
            }
        }
        catch(err){
            console.log("there's an error! ->", err)
            setClassDetails("Error")
        }
    }

    useEffect(() => {
        let currentUserUID = firebase.auth().currentUser.uid
        
        firebase
        .firestore()
        .collection('userProfile')
        .doc(currentUserUID)
        .get()
        .then((doc) =>{ if(!doc.exists){
            // do nothing
            console.log('no course code added by the user yet.')
        }
        else{
            let dataObj = doc.data();
            setCourse(dataObj.code)
        }})
    }, [])

    const formatDate = (date) => {
        const listOfMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
        const splitDate = date.toISOString().split("T")[0].split("-")   
        const getMonth = listOfMonths[parseInt(splitDate[1] - 1)]
        const splitDateList = splitDate.map(n => parseInt(n, 10))
        const year = splitDateList[0]               // year
        const month = splitDateList[1] - 1          // month is zero indexed
        const day = splitDateList[2]
        const jsd = new Date(year, month, day)
        const dayName = jsd.toLocaleDateString('en-UK', { weekday: 'long' })

        // ios and android have different ways of showing weekday this is to cater for that
        if(Platform.OS === 'ios'){
            return `${dayName} - ${day} ${getMonth} ${year}`
        }else{
            return `${day} ${getMonth} ${year}`
        }   
    }

    const dateChange = (date, selectedDate) => {
        const inputDate = selectedDate || date
        setEnteredDate(inputDate)
        setDisplay(formatDate(inputDate))
        hideDatePicker()
    }

    // for calendar / datepicker
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false)

    const showDatePicker = () => {
        setDatePickerVisibility(true)
    }

    const hideDatePicker = () => {
        setDatePickerVisibility(false)
    }


    return (
        <SafeAreaView style={styles.container}>
        <StatusBar style="auto"/>
        <KeyboardAwareScrollView>
        
            <Header title="TIMETABLE"/>

            <View style={{alignItems: "center", justifyContent: 'center', marginTop: 150}}>
                <Text style={{color: 'gray', fontSize: 17}}>enter course code and date</Text>
                
                <TextInput style={{
                    borderWidth: 2,
                    borderColor: '#25afcd',
                    padding: 10,
                    width: 230,
                    marginTop: 20,
                    borderRadius: 5,
                    fontSize: 17
                }}
                    placeholder="COURSE CODE"
                    placeholderTextColor="#c7c7cd"
                    textAlign='center'
                    onChangeText={text => setCourse(text)}
                    value={enteredCourseCode}
                />

                {/* date picker button here */}
                <TouchableOpacity style={{
                    borderWidth: 2,
                    borderColor: '#25afcd',
                    borderRadius: 5,
                    padding: 10,
                    width: 230,
                    marginTop: 10,

                }}
                    onPress={showDatePicker}>
                    {dateDisplay == '' ? <Text style={{fontSize: 15, color: 'black', textAlign: 'center'}}>PICK A DATE</Text> 
                    : <Text style={{fontSize: 17, color: 'black', textAlign: 'center'}}>{dateDisplay}</Text>}
                
                </TouchableOpacity>
                
                <DTPickerModal
                    headerTextIOS={"Choose a date"}
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={dateChange}
                    onCancel={hideDatePicker}
                />
            </View>

            <TouchableOpacity onPress={() => getClassDets()}>
                <View style={styles.submit_button}>
                    <Text style={{
                        color: "#f4a446",
                        fontSize: 20
                    }}>SUBMIT</Text>
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
        height: DeviceHeight
    },
        image_style: {
        width: 100, 
        height: 100,     
    },
    submit_button: {
        marginHorizontal: 130,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        borderWidth: 2,
        borderColor: "#f4a446",
        paddingVertical: 5,
        borderRadius: 20
    }

})
