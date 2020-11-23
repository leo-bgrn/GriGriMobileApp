import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {View, ActivityIndicator, Text, Dimensions} from 'react-native';
import {getHistoric} from '../API/GriGriApi';
import HistoricList from './HistoricList';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';

class Historic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      historic: [],
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
      getHistoric().then((data) => {
        data.sort((a, b) => (a.from < b.from ? 1 : -1));
        this.setState({
          historic: data,
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
          <SafeAreaView>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Historique</Text>
            </View>
          </SafeAreaView>
        </Animatable.View>
        <View style={styles.bottomContainer}>
          <HistoricList historic={this.state.historic} />
        </View>
      </View>
    );
  }
}

const windowWidth = Dimensions.get('window').width;
const styles = EStyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#EBEBEB',
  },
  upperContainer: {
    flex: 0.2,
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
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    margin: '10rem',
    fontSize: '30rem',
    color: '#EBEBEB',
  },
  loading_container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  bottomContainer: {
    flex: 0.8,
  },
});

export default Historic;
