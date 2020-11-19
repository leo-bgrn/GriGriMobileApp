import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import LeaderboardPlace from './LeaderboardPlace';

class LeaderboardPlaces extends React.Component {
  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.props.ranks}
        keyExtractor={(item) => Number(item.id).toString()}
        renderItem={({item}) => <LeaderboardPlace user={item} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {flex: 1},
});

export default LeaderboardPlaces;
