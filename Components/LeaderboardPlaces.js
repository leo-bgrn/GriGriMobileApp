import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import LeaderboardPlace from './LeaderboardPlace';

class LeaderboardPlaces extends React.Component {
  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.props.ranks}
        keyExtractor={(item) => this.props.ranks.indexOf(item).toString()}
        renderItem={({item}) => (
          <LeaderboardPlace
            user={item}
            index={this.props.ranks.indexOf(item)}
          />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {flex: 1},
});

export default LeaderboardPlaces;
