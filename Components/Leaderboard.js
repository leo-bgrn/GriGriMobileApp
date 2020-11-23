import React from 'react';
import {View, ActivityIndicator, SafeAreaView, Dimensions} from 'react-native';
import {getPoints} from '../API/GriGriApi';
import LeaderboardPodium from './LeaderboardPodium';
import LeaderboardPlaces from './LeaderboardPlaces';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';

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
        <LottieView
          source={require('../Animations/loading-dots.json')}
          autoPlay
          loop
          style={{width: windowWidth * 0.3, aspectRatio: 1}}
          colorFilters={[
            {
              keypath: 'Shape Layer 1',
              color: '#496E98',
            },
            {
              keypath: 'Shape Layer 2',
              color: '#496E98',
            },
            {
              keypath: 'Shape Layer 3',
              color: '#496E98',
            },
            {
              keypath: 'Shape Layer 4',
              color: '#496E98',
            },
            {
              keypath: 'Shape Layer 5',
              color: '#496E98',
            },
          ]}
        />
      </View>
    );
  }

  _loadData() {
    this.setState({isLoading: true});
    setTimeout(() => {
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
    }, 500);
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
        <Animatable.View animation="slideInDown" style={styles.upperContainer}>
          <SafeAreaView></SafeAreaView>
          <LeaderboardPodium
            userFirst={this.state.ranks[0]}
            userSecond={this.state.ranks[1]}
            userThird={this.state.ranks[2]}
          />
        </Animatable.View>
        <View style={styles.bottomContainer}>
          <LeaderboardPlaces ranks={this.state.ranks.slice(3, 7)} />
        </View>
      </View>
    );
  }
}

const windowWidth = Dimensions.get('window').width;
const styles = EStyleSheet.create({
  mainContainer: {
    backgroundColor: '#EBEBEB',
    flex: 1,
  },
  loading_container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#EBEBEB',
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
