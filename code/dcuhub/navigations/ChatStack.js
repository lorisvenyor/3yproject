
import {createStackNavigator} from 'react-navigation-stack'

// import Chatbox from '../screens/ChatBox'
// import ChatPrivate from '../screens/ChatPrivate'
import Rooms from '../screens/Rooms'
import Messages from '../screens/Messages'

const navHandler = (navigation) => ({
    headerShown: false
})
const MessageStack = createStackNavigator({
    ListMessages: {
        screen: Rooms,
        navigationOptions: navHandler
    },
    Messages: {
        screen: Messages,
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'white'
            },
            headerTitleStyle: {
                color: '#25afcd',
                fontSize: 22
            },
            headerBackTitleVisible : false
        }
    }
})

export default MessageStack

//#25afcd