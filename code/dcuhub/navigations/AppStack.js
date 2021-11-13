
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {useScrollToTop} from '@react-navigation/native'

import NewsFeed from '../screens/NewsFeed'
import MessageStack from './ChatStack'
import TimeTableStack from './TimeTableStack'
import ProfileStack from './ProfileStack'

const getTabBarVisibility = (route) => {
    const routeName = route.state ? route.state.routes[route.state.index].routeName : ''
    
    if(routeName === 'Messages' || routeName === 'UpdateProfile'){
        return false
    }
        return true
}

const AppStack = createBottomTabNavigator(
    {
        News: {
            screen: NewsFeed,
            navigationOptions: {
                tabBarLabel: 'News',
                tabBarIcon: ({tintColor}) => <Ionicons name="ios-list-sharp" color={tintColor} size={26}/>,
            }
        },
        Chats: {
            screen: MessageStack,
            navigationOptions: ({ navigation }) => ({
                tabBarLabel: 'Chat',
                tabBarVisible: getTabBarVisibility(navigation),
                tabBarIcon: ({tintColor}) => <Ionicons name="ios-chatbubbles" color={tintColor} size={26}/>
              })
        },
        TimeTable: {
            screen: TimeTableStack,
            navigationOptions: {
                tabBarLabel: 'Timetable',
                tabBarIcon: ({tintColor}) => <Ionicons name="calendar" color={tintColor} size={26}/>
            }
        },
        Profile: {
            screen: ProfileStack,
            navigationOptions: ({ navigation }) => ({
                tabBarVisible: getTabBarVisibility(navigation),
                tabBarLabel: 'Profile',
                tabBarIcon: ({tintColor}) => <Ionicons name="ios-person" color={tintColor} size={26}/>
              })
        }
    },
    {
        tabBarOptions: {
            labelPosition:'below-icon',
            showLabel: true,
            activeTintColor: "#25afcd",
            inactiveTintColor: "black",
        }
    }
)

export default AppStack