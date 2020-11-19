import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {View, ActivityIndicator, ImageBackground, Text} from 'react-native';
import {getHistoric} from '../API/GriGriApi';
import HistoricList from './HistoricList';

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
        <ActivityIndicator size="large" />
      </View>
    );
  }

  _loadData() {
    this.setState({isLoading: true});
    getHistoric().then((data) => {
      data.sort((a, b) => (a.from < b.from ? 1 : -1));
      this.setState({
        historic: data,
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
          <SafeAreaView>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Historique</Text>
            </View>
          </SafeAreaView>
        </View>
        <View style={styles.bottomContainer}>
          <HistoricList historic={this.state.historic} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#f0f0f0',
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
    margin: 10,
    fontSize: 30,
    color: '#EBEBEB',
  },
  loading_container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  bottomContainer: {flex: 0.8},
});

export default Historic;
