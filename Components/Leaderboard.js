import React from 'react';
import {View, ActivityIndicator, SafeAreaView} from 'react-native';
import {getPoints} from '../API/GriGriApi';
import LeaderboardPodium from './LeaderboardPodium';
import LeaderboardPlaces from './LeaderboardPlaces';
import EStyleSheet from 'react-native-extended-stylesheet';

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
      data.sort((a, b) => (a.points > b.points ? 1 : -1));
      const ranks = data.map((rank) => {
        return {
          id: rank.user.id,
          avatar: rank.user.avatar,
          name: rank.user.name,
          points: Math.floor(rank.points).toString(),
        };
      });
      this.setState({
        ranks: ranks,
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
      <View style={styles.mainContainer}>
        <View style={styles.upperContainer}>
          <SafeAreaView></SafeAreaView>
          <LeaderboardPodium
            userFirst={this.state.ranks[0]}
            userSecond={this.state.ranks[1]}
            userThird={this.state.ranks[2]}
          />
        </View>
        <View style={styles.bottomContainer}>
          <LeaderboardPlaces ranks={this.state.ranks.slice(3, 7)} />
        </View>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  mainContainer: {
    backgroundColor: '#EBEBEB',
    flex: 1,
  },
  loading_container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  upperContainer: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#496E98',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 20,
  },
  bottomContainer: {flex: 0.6},
});

export default Ranking;
