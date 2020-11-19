import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import HistoricItem from './HistoricItem';

class HistoricList extends React.Component {
  render() {
    return (
      <FlatList
        style={styles.list}
        data={this.props.historic}
        keyExtractor={(item) => item.from}
        renderItem={({item}) => (
          <HistoricItem item={item} items={this.props.historic} />
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

export default HistoricList;
