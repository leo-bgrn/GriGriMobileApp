import React from 'react';
import {getUsers} from '../API/GriGriApi';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import SelectUserItem from './SelectUserItem';
import {connect} from 'react-redux';

class SelectUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
    };
  }

  _loadUsers() {
    this.setState({isLoading: true});
    getUsers().then((data) => {
      this.setState({
        users: data,
        isLoading: false,
      });
    });
  }

  componentDidMount() {
    this._loadUsers();
  }

  _displayLoading() {
    return (
      <View style={styles.loading_container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  render() {
    if (this.state.isLoading) {
      return this._displayLoading();
    }
    return (
      <View style={styles.main_container}>
        <View style={styles.list_container}>
          <FlatList
            style={styles.list}
            data={this.state.users}
            keyExtractor={(item) => Number(item.id).toString()}
            renderItem={({item}) => <SelectUserItem item={item} />}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main_container: {
    backgroundColor: 'red',
    flex: 1,
  },
  list_container: {
    margin: 5,
    flex: 1,
  },
  loading_container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

const mapStateToProps = (state) => {
  return {
    whoAmI: state.setWhoAmI.whoAmI,
  };
};
export default connect(mapStateToProps)(SelectUser);
