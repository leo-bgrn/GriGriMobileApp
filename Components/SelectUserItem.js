import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
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
        <Image
          style={styles.image}
          source={{
            uri: this.props.item.avatar,
          }}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    margin: 10,
    borderRadius: 100,
  },
});

const mapStateToProps = (state) => {
  return {
    whoAmI: state.setWhoAmI.whoAmI,
  };
};

export default connect(mapStateToProps)(SelectUserItem);
