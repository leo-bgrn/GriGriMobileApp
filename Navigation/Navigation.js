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
        tabBarIcon: () => {
          return <Icon name="home" color="#496E98" type="ionicon" size={30} />;
        },
      },
    },
    Leaderboard: {
      screen: Leaderboard,
      navigationOptions: {
        tabBarIcon: () => {
          return <Icon name="podium" color="#496E98" type="ionicon" size={30} />;
        },
      },
    },
    Historic: {
      screen: Historic,
      navigationOptions: {
        tabBarIcon: () => {
          return <Icon name="history" color="#496E98" type="material" size={30} />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      activeBackgroundColor: '#DDDDDD',
      inactiveBackgroundColor: '#FFFFFF',
    },
  },
);

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
});

export default createAppContainer(AppNavigator);
