import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import HomeScreen from "../screens/HomeScreen"
import DetailsScreen from "../screens/DetailsScreen"


export const AppStackNavigator = createStackNavigator({
    Home:{
        screen:HomeScreen,
        navigationOptions:{
            headerShown:false
        }
    },
    Details:{
        screen:DetailsScreen,
        navigationOptions:{
            headerShown:false
        }
    },

},
{
    initialRouteName:'Home'
}
)
