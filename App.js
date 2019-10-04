
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';
// import { createStackTabNavigator } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { View, Text, Stylesheet } from 'react-native';
import { } from 'react-navigation-stack';
import starRating from 'react-native-star-rating'

import homeScreen from './home';
import aboutScreen from './about';
import settingScreen from './settings';
import galleryScreen from './gallery';



// const stackNavigator = createStackTabNavigator({
// login: loginScreen,
// tabs: tabNavigator
// })


const tabNavigator = createBottomTabNavigator({
  Home: homeScreen,
  About: aboutScreen,
  Setting: settingScreen,
})

export default createAppContainer(tabNavigator)

