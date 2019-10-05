
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation';
// import { createStackTabNavigator } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { View, Text, Stylesheet } from 'react-native';
import { } from 'react-navigation-stack';
import starRating from 'react-native-star-rating'

import homeScreen from './home';
import hotelsScreen from './hotels';
import resortsScreen from './resorts';

const tabNavigator = createBottomTabNavigator({
  Home: homeScreen,
  hotels: hotelsScreen,
  resorts: resortsScreen,
})

export default createAppContainer(tabNavigator)

