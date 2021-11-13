
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import ignoreWarnings from 'react-native-ignore-warnings';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs()
LogBox.ignoreLogs(['Setting a timer for a long period of time',
'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation'])

// navigation imports
import LoadingScreen from './screens/LoadingScreen'
import AuthStack from './navigations/AuthStack'
import AppStack from './navigations/AppStack'

const MainFlow = createSwitchNavigator(
    {
        Loading: LoadingScreen,
        Auth: AuthStack,
        App: AppStack
    },
    {
        initialRouteName: 'Loading'
    }
)

export default createAppContainer(MainFlow)