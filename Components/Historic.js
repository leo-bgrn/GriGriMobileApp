import React from 'react';
import {StyleSheet} from 'react-native';
import {View, ActivityIndicator} from 'react-native';
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
      <View style={styles.main_container}>
        <HistoricList historic={this.state.historic} />
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

export default Historic;
