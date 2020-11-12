import React from 'react';
import {StyleSheet} from 'react-native';
import {View, ActivityIndicator} from 'react-native';
import {getPoints} from '../API/GriGriApi';
import RankingList from './RankingList';

class Ranking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ranks: [],
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
    getPoints().then((data) => {
      data.sort((a, b) => (a.points < b.points ? 1 : -1));
      this.setState({
        ranks: data,
        isLoading: false,
      });
    });
  }

  componentDidMount() {
    this._loadData();
  }

  render() {
    if (this.state.isLoading) {
      return this._displayLoading();
    }
    return (
      <View style={styles.main_container}>
        <RankingList ranks={this.state.ranks} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    backgroundColor: 'red',
    flex: 1,
  },
  loading_container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default Ranking;
