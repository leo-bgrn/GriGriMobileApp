import moment from 'moment';
import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import 'moment/locale/fr';
import {Icon} from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as Animatable from 'react-native-animatable';

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
      <Animatable.View
        animation="slideInRight"
        delay={1000 + itemIndex * 100}
        duration={600}
        style={styles.main_container}>
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
      </Animatable.View>
    );
  }
}
const windowWidth = Dimensions.get('window').width;
const styles = EStyleSheet.create({
  main_container: {
    height: '70rem',
    marginLeft: '20rem',
    marginRight: '20rem',
    backgroundColor: '#F5F5F5',
    flexDirection: 'row',
    marginTop: '8rem',
    marginBottom: '7rem',
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
    marginLeft: '30rem',
    justifyContent: 'center',
  },
  image: {
    height: windowWidth * 0.12,
    aspectRatio: 1,
    borderRadius: 50,
    margin: '10rem',
  },
  dates_text: {
    fontFamily: 'Helvetica Neue',
    fontSize: '15rem',
  },
  avatarsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10rem',
  },
});

export default HistoricItem;
