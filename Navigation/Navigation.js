import React from 'react';
import {StyleSheet, Image} from 'react-native';
import Home from '../Components/Home';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ranking from '../Components/Ranking';
import Historic from '../Components/Historic';

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: () => {
          return (
            <Image
              source={require('../Images/ic_home.png')}
              style={styles.icon}
            />
          );
        },
      },
    },
    Ranking: {
      screen: Ranking,
      navigationOptions: {
        tabBarIcon: () => {
          return (
            <Image
              source={require('../Images/ic_ranking.png')}
              style={styles.icon}
            />
          );
        },
      },
    },
    Historic: {
      screen: Historic,
      navigationOptions: {
        tabBarIcon: () => {
          return (
            <Image
              source={require('../Images/ic_historic.png')}
              style={styles.icon}
            />
          );
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
