import React from 'react';
import Home from '../Components/Home';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ranking from '../Components/Ranking';
import Historic from '../Components/Historic';

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
  Ranking: {
    screen: Ranking,
    navigationOptions: {
      title: 'Ranking',
    },
  },
  Historic: {
    screen: Historic,
    navigationOptions: {
      title: 'Historic',
    },
  },
});

export default createAppContainer(AppNavigator);
