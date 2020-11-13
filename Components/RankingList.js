import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import RankingItem from './RankingItem';

class RankingList extends React.Component {
  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.props.ranks}
        keyExtractor={(item) => Number(item.user.id).toString()}
        renderItem={({item}) => <RankingItem rank={item} />}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {flex: 1},
});

export default RankingList;
