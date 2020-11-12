import moment from 'moment';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class HistoricItem extends React.Component {
  _displayFrom(item) {
    const from = moment(item.from);
    const fromStr = from.format('DD/MM/YYYY HH:mm');
    return <Text>Depuis le {fromStr}</Text>;
  }

  _displayTo(item) {
    if (item.to != null) {
      const to = moment(item.to);
      const toStr = to.format('DD/MM/YYYY HH:mm');
      return <Text>Echangé le {toStr}</Text>;
    }
  }

  render() {
    moment.locale('fr');
    const {item} = this.props;
    return (
      <View style={styles.main_container}>
        <Text>{item.name}</Text>
        {this._displayTo(item)}
        {this._displayFrom(item)}
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

export default HistoricItem;
