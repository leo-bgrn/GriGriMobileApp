import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class RankingItem extends React.Component {
  render() {
    const {rank} = this.props;
    const points = Math.floor(rank.points).toString();
    return (
      <View style={styles.main_container}>
        <Text>{rank.user.name}</Text>
        <Text>{points} points</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 80,
    backgroundColor: 'yellow',
  },
});

export default RankingItem;
