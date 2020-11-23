import React from 'react';
import {StyleSheet} from 'react-native';
import Home from '../Components/Home';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Leaderboard from '../Components/Leaderboard';
import Historic from '../Components/Historic';
import {Icon} from 'react-native-elements';

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
          return (
            <Icon name="home" color={tintColor} type="ionicon" size={30} />
          );
        },
      },
    },
    Leaderboard: {
      screen: Leaderboard,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
          return (
            <Icon name="podium" color={tintColor} type="ionicon" size={30} />
          );
        },
      },
    },
    Historic: {
      screen: Historic,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
          return (
            <Icon name="history" color={tintColor} type="material" size={30} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      activeTintColor: '#496E98',
    },
  },
);
export default createAppContainer(AppNavigator);
