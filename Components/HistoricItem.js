import moment from 'moment';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import 'moment/locale/fr';
import {Icon} from 'react-native-elements';

class HistoricItem extends React.Component {
  _displayFrom(item) {
    const from = moment(item.from).locale('fr');
    const fromStr = from.format('Do MMMM');
    return <Text style={styles.dates_text}>{fromStr}</Text>;
  }

  render() {
    moment.locale('fr');
    const {item, items} = this.props;
    const itemIndex = items.indexOf(item);
    const nextItem = items[itemIndex + 1];
    if (nextItem == null) {
      return <View></View>;
    }
    return (
      <View style={styles.main_container}>
        <View style={styles.avatarsContainer}>
          <Image
            style={styles.image}
            source={{
              uri: nextItem.avatar,
            }}
          />
          <Icon name="chevron-forward-outline" type="ionicon" />
          <Image
            style={styles.image}
            source={{
              uri: item.avatar,
            }}
          />
        </View>
        <View style={styles.content_container}>{this._displayFrom(item)}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    height: 80,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    marginTop: 15,
    borderRadius: 20,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 20,
  },
  content_container: {
    flex: 1,
    marginLeft: 30,
    justifyContent: 'center',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    margin: 10
  },
  dates_text: {},
  avatarsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HistoricItem;
