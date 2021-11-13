'use strict'
import React, { Component, useEffect } from 'react';
import { Text, Image, TextInput, TouchableHighlight, StatusBar, FlatList, View, TouchableOpacity, Dimensions, LogBox, Alert } from 'react-native';
// import firebaseApp from './firebaseConfig.js';
import firebaseApp from '../config/firebasekeys';
import {SafeAreaView} from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import styles from './ChatStyle';
import HeaderDisplay from '../shared/header'
import { Ionicons } from '@expo/vector-icons'; 


LogBox.ignoreAllLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation'])

class Rooms extends Component {
    
    _isMounted = false

    static navigationOptions = {
        title: 'Rooms',
        headerShown: true
    }

    constructor(props) {
        super(props);
            var firebaseDB = firebaseApp.database();
            this.roomsRef = firebaseDB.ref('rooms'); // rooms collection
            this.state = {
            rooms: [],
            newRoom: ''
        }
    }

    componentDidMount() {
        this._isMounted = true
        
        if(this._isMounted){
            LogBox.ignoreLogs(['VirtualizedLists should never be nested']); // doing this to ignore the log box error for scroll view since scroll view is needed
            this.listenForRooms(this.roomsRef)
        }
    }
    
    componentWillUnmount(){
        this._isMounted = false
    }

    listenForRooms(roomsRef) {
        this._isMounted = true
        
        roomsRef.on('value', (dataSnapshot) => {
        var roomsFB = [];
        dataSnapshot.forEach((child) => {
            roomsFB.push({
            name: child.val().name,
            key: child.key
            });
        })
        if(this._isMounted){
            this.setState({ rooms: roomsFB })
        }
        // this.setState({ rooms: roomsFB })
        });
    }

    addRoom() {
        if (this.state.newRoom === '') {
            Alert.alert('Enter Chat Name', `Please enter a chat name.`)
        }else{
            this.roomsRef.push({ name: this.state.newRoom });
            this.setState({ newRoom: '' });
        }
    }

    openMessages(room) {
        this.props.navigation.navigate("Messages", {roomKey: room.key, roomName: room.name});
    }

    renderRow(item) {
        return (
        <TouchableOpacity style={{
            flex: 1,
            marginTop: 20,
            marginHorizontal: 30,
            padding: 15,
            borderRadius: 20,
            borderColor: 'orange',
            borderWidth: 2,
        }}
            onPress={() => this.openMessages(item)}
            
            onLongPress={() => 
                Alert.alert(
                    'Confirm',
                    `Delete chat room '${item['name']}'?`,
                    [
                      {text: 'Delete', onPress: () => this.roomsRef.child(item.key).remove()},
                      {
                        text: 'Cancel', onPress: () => console.log('OK Pressed'),
                      },
                    ],
                    {cancelable: false},
                  )
                }
            > 
            {/* here's where the chat name title go. so cut the length of the string if it goes beyond 30 */}
            {item.name.length < 30 ? <Text style={{color: 'orange', fontSize: 21}}>{item.name}</Text> :
            <Text style={{color: 'orange', fontSize: 20}}>{item.name.substring(0,30) + "..."}</Text>
            }
        </TouchableOpacity>
        )    
    }

  render() {
        return (
        <SafeAreaView style={styles.container}>
        <StatusBar style="auto"/>
        <KeyboardAwareScrollView>
        
        <HeaderDisplay title="MESSAGES"/>
            
            {/* the whole view */}
            <View style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    paddingBottom: 10,
                    marginTop: 10
            }}>        
                {/* enter a chat group name */}
                <View style={{
                        paddingTop: 8, 
                        fontSize: 25,
                        flexDirection: 'row',
                        }}>

                    <TextInput
                        style={{
                            flex: 1,
                            height: 40,
                            fontSize: 18,
                            color: 'black',
                            borderColor: '#25afcd',
                            borderWidth: 1.5,
                            borderRadius: 10,
                            paddingHorizontal: 20,
                            marginLeft: 20,
                            marginRight: 100,

                        }}
                        placeholder={"create a chat group"}
                        onChangeText={(text) => this.setState({newRoom: text})}
                        value={this.state.newRoom}
                    />
                    <TouchableHighlight
                        style={{
                            marginRight: 20
                        }}
                        onPress={() => this.addRoom()}
                        >
                        <Ionicons name="ios-create-outline" size={35} color="#25afcd" />
                    </TouchableHighlight>

                </View>

                <View style={{
                        flex: 1,
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        marginTop: 30,
                        marginBottom: 20
                }}>
                <FlatList
                    data={this.state.rooms}
                    renderItem={({item}) => (this.renderRow(item)
                    )}/>
                </View>
    
            </View>

        </KeyboardAwareScrollView>
        </SafeAreaView>

        )
    }
}

export default Rooms

