import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Button} from 'react-native';
import CurrentPerson from './CurrentPerson';
import {getCurrentLocation} from '../API/GriGriApi';
import AsyncStorage from '@react-native-community/async-storage';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      totalPoints: 0,
      pointsDueToNow: 0,
      since: null,
      lastUser: null,
      isLoading: false,
    };
  }

  _displayLoading() {
    return (
      <View style={styles.loading_container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  _loadData() {
    this.setState({isLoading: true});
    getCurrentLocation().then((data) => {
      const since = new Date(data.since);
      this.setState({
        user: data.user.name,
        totalPoints: Math.floor(data.user.totalPoints),
        pointsDueToNow: Math.floor(data.user.pointsDueToNow),
        since: since,
        lastUser: data.lastUser,
        isLoading: false,
      });
    });
  }

  componentDidMount() {
    this._loadData();
  }

  async _deleteCache() {
    try {
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
    } catch (error) {
      console.error('Error clearing app data.');
    }
  }

  render() {
    if (this.state.isLoading) {
      return this._displayLoading();
    }
    return (
      <View style={styles.main_container}>
        <CurrentPerson
          user={this.state.user}
          totalPoints={this.state.totalPoints}
          pointsDueToNow={this.state.pointsDueToNow}
          since={this.state.since}
          lastUser={this.state.lastUser}
        />
        <Button onPress={this._deleteCache} title="Delete cache" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  loading_container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default Home;
