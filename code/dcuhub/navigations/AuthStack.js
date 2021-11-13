import {createStackNavigator} from 'react-navigation-stack'

import Login from '../screens/Login'
import Register from '../screens/Register'
import ForgotPassword from '../screens/ForgotPassword'


const navHandler = (navigation) => ({
    headerShown: false
})

const AuthStack = createStackNavigator({
    Register: {
        screen: Register,
        navigationOptions: navHandler
    },
    Login : {
        screen: Login,
        navigationOptions: navHandler
    },
    Reset : {
        screen: ForgotPassword,
        navigationOptions: navHandler
    }
})

export default AuthStack
