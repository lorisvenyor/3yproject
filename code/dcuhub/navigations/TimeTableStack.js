
import {createStackNavigator} from 'react-navigation-stack'

import TimeTableHome from '../screens/TimeTableHome'
import TimeTableDisplay from '../screens/TimeTableDisplay'

const navHandler = (navigation) => ({
    headerShown: false
})

const TimeTableStack = createStackNavigator({
    TimeTable: {
        screen: TimeTableHome,
        navigationOptions: navHandler
    },
    TimeTableDisplay: {
        screen: TimeTableDisplay,
        navigationOptions: navHandler
    }
})

export default TimeTableStack