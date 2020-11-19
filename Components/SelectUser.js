import React from 'react';
import {getUsers} from '../API/GriGriApi';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
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
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Qui es tu ?</Text>
        </View>
        <View style={styles.list_container}>
          {this.state.users.map((item) => (
            <SelectUserItem key={item.id} item={item} />
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main_container: {
    backgroundColor: '#EBEBEB',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 0.4,
  },
  titleText: {
    fontSize: 50,
    fontFamily: 'Helvetica Neue',
    color: '#496E98',
    fontWeight: 'bold',
    marginBottom: 50,
  },
  list_container: {
    flex: 0.6,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center"
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
