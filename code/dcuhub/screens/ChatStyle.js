'use strict';

import { StyleSheet, Dimensions } from 'react-native';

const DeviceHeight = Dimensions.get('screen').height
const DeviceWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        height: DeviceHeight
    },
    keyboardView: {
        flex: 1,
        backgroundColor: 'white'
    },
    authContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 60
    },
    appTitle: {
        color: '#fff',
        fontSize: 48,
        fontWeight: '200',
        marginBottom: 30
    },
    authInputLabel: {
        color: 'white',
        alignSelf: 'flex-start',
        marginLeft: 50
    },
    authTextInput: {
        height: 52,
        color: '#fff',
        fontSize: 20,
        textAlign: 'left',
        backgroundColor: 'white',
        borderBottomWidth: 2,
        marginBottom: 5,
        marginLeft: 50,
        marginRight: 50,
        borderBottomColor: '#fff'
    },
    authButton: {
        backgroundColor: 'transparent',
        borderColor: '#fff',
        borderWidth: 3,
        borderRadius: 4,
        padding: 16,
        marginTop: 20,
    },
    authButtonText: {
        color: '#fff',
        fontSize: 20
    },
    authLowerText: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 15,
        marginTop: 10
    },
    roomsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingBottom: 10,
        backgroundColor: '#25afcd', /// header
    },
    roomsHeader: {
        color: '#ffff',
        fontSize: 28,
        top: 20
    },
    roomsInputContainer: {
        paddingTop: 8, fontSize: 25,
        flexDirection: 'row',
        backgroundColor: 'yellow',
        borderBottomColor: '#FFFFFF',
        
    },
    roomsInput: {
        flex: 1,
        height: 40,
        
        fontSize: 18,
        color: '#1E90FF',
        borderColor: '#f9f9f9',
        borderWidth: 2,
        borderRadius: 10,
        margin: 20
    },
    roomsNewButton: {
        marginRight: 20,
        paddingTop: 27
        
    },
    roomsNewButtonText: {
        color: 'orange',
        fontSize: 18
    },
    roomsListContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 1,
        backgroundColor: '#fff'
    },
    roomLi: {
        flex: 1,
        backgroundColor: 'white',
        borderBottomColor: '#f9f9f9',
        borderColor: '#fff',
        borderWidth: 5,
        paddingLeft: 13,
        paddingTop: 20,
        paddingBottom: 10,
    },
    roomLiText: {
        color: 'orange',
        fontSize: 25,
    },
    messagesHeader: {
        backgroundColor: '#25afcd'
    },
    messagesTitle: {
        color: '#25afcd',
        fontSize: 28,
        // fontWeight: '400'
    },
    messagesBackTitle: {
        color: 'black'
    },

    item_design: {
        marginTop: 24,
        padding: 30,
        backgroundColor: 'pink',
        fontSize: 20
    }
})

export default styles