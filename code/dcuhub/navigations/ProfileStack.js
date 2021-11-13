
import {createStackNavigator} from 'react-navigation-stack'

import UserProfile from '../screens/UserProfile'
import EditProfile from '../screens/EditProfile'
import Todolist from '../screens/Todolist'
import DeleteAccount from '../screens/DeleteAccount'
import ChangeLoginPassword from '../screens/ChangeLoginPassword'

const navHandler = (navigation) => ({
    headerShown: false
})

const ProfileStack = createStackNavigator({    
    Profile: {
        screen: UserProfile,
        navigationOptions: navHandler
    },
   
    UpdateProfile: {
        screen: EditProfile,
        navigationOptions: navHandler
    },
    Lists: {
        screen: Todolist,
        navigationOptions: {
            headerTitle: 'To-Do List',
            headerTitleStyle: {
                color: '#25afcd',
                fontSize: 20
            }
        }
    },
    DeleteAcc: {
        screen: DeleteAccount,
        navigationOptions: {
            headerTitle: 'Delete Account',
            headerTitleStyle: {
                color: '#25afcd',
                fontSize: 20
            }
        }
    },
    ChangeLoginPassword: {
        screen: ChangeLoginPassword,
        navigationOptions: {
            headerTitle: 'Change Password',
            headerTitleStyle: {
                color: '#25afcd',
                fontSize: 20
            }
        }
    }
})

export default ProfileStack