'use strict'
import React, { Component } from 'react';
import { StatusBar, View, TouchableHighlight, Text, TouchableOpacity } from 'react-native';
import { GiftedChat,Bubble} from 'react-native-gifted-chat';
import firebaseApp from '../config/firebasekeys';

class Messages extends Component {

    _isMounted = false
    
    static navigationOptions = ({ navigation }) => ({
        title: navigation.state.params.roomName
    })

    constructor(props) {
        super(props);
            var FirebaseDB = firebaseApp.database()
            var roomKey = this.props.navigation.state.params.roomKey
            this.messagesRef = FirebaseDB.ref(`messages/${roomKey}`)
            this.state = {
                user: '',
                messages: []
            }
    }

    componentDidMount() {
        this._isMounted = true
        if(this._isMounted){
            this.setState({ user: firebaseApp.auth().currentUser})
            this.listenForMessages(this.messagesRef)
        }
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    listenForMessages(messagesRef) {
        this._isMounted = true

        messagesRef.on('value', (dataSnapshot) => {
            var messagesFB = [] //list of all messages
            
            dataSnapshot.forEach((child) => {
            messagesFB = [({
                _id: child.key,
                text: child.val().text,
                createdAt: child.val().createdAt,
                
                user: {
                _id: child.val().user._id,
                name: child.val().user.name // this returns the email
                }
            }), ...messagesFB]
            })
            if(this._isMounted){
                this.setState({ messages: messagesFB })
            }
        })
    }

    addMessage(message = {}) {
        var message = message[0]
        this.messagesRef.push({
            text: message.text,
            createdAt: Date.now(),
            user: {
                _id: message.user._id,
                name: message.user.name
            }
        })
    }

    render() {
        return (
        
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <StatusBar style="auto"/>
    
                <GiftedChat
                    renderUsernameOnMessage={true}
                    messages={this.state.messages}
                    alwaysShowSend={true}
                    keyboardShouldPersistTaps="never"   // taps the screen to get rid of the keyboard
                    onSend={this.addMessage.bind(this)}
                    user={{
                        _id: this.state.user.uid,
                        name: this.state.user.email,
                }}
                renderBubble={props => {
                    
                    return (
                    <Bubble
                        {...props}
                            textStyle={{
                            right: { color: 'black' },
                            left: {color: 'black'}
                        }} //#feca67 - orange
                        wrapperStyle={{
                            left: { 
                                backgroundColor: '#FFD385',
                                borderTopLeftRadius: 15,
                                borderBottomLeftRadius: 15,
                                borderTopRightRadius: 15,
                                borderBottomRightRadius: 15
                            
                            }, //#FFBD4A
                            right: { backgroundColor: '#95ECEF'}, //#25afcd

                        }}
                    />
                    );
                }}
                />        
            </View>
            )
        }
        }

export default Messages