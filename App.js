import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import { } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';


import homeScreen from './home';
import hotelsScreen from './hotels';
import resortsScreen from './resorts';


const tabNavigator = createBottomTabNavigator({
  Home: { screen: homeScreen,
    navigationOptions: {
      tabBarLabel: 'HOME',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={22} />
      )
    }
  },
  Hotels: { screen: hotelsScreen,
    navigationOptions: {
      tabBarLabel: 'HOTELS',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-bed" color={tintColor} size={22} />
      )
    }
  },
  Resorts: { screen: resortsScreen,
    navigationOptions: {
      tabBarLabel: 'RESORTS',
         tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-thumbs-up" color={tintColor} size={22} />
      )
    }
  },
});

export default createAppContainer(tabNavigator)

