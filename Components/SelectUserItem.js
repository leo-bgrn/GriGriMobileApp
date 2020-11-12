import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class SelectUserItem extends React.Component {
  _setWhoAmI() {
    const action = {type: 'SET_WHO_AM_I', value: this.props.item.name};
    this.props.dispatch(action);
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.item_container}
        onPress={() => this._setWhoAmI()}>
        <Text>{this.props.item.name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item_container: {
    backgroundColor: 'green',
    margin: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    whoAmI: state.setWhoAmI.whoAmI,
  };
};

export default connect(mapStateToProps)(SelectUserItem);
