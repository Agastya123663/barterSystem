import React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppTabNavigator} from '../components/AppTabNavigator'
import CustomSideDrawerMenu from '../components/CustomSideBarMenu'
import SettingsScreen from '../screens/SettingsScreen'
import MyBarterScreen from "../screens/MyBarterScreen"
import NotificationsScreen from "../screens/NotificationsScreen"
export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },
    MyBarters : {
        screen : MyBarterScreen
      },
    Settings:{
        screen:SettingsScreen
    },
    Notification:{
        screen:NotificationsScreen
    }
    
},
{
    contentComponent:CustomSideDrawerMenu
},
{
    initialRouteName:'Home'
}

)

