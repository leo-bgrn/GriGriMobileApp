import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

class CurrentPerson extends React.Component {
  render() {
    const {user, totalPoints, pointsDueToNow, lastUser} = this.props;
    const userAvatarSource =
      user != null ? {uri: user.avatar} : {uri: defaultAvatarUrl};
    const username = user != null ? user.name : '';
    return (
      <View style={styles.main_container}>
        <View style={styles.title_container}>
          <View style={styles.image_container}>
            <Image style={styles.image} source={userAvatarSource} />
          </View>
          {user != null && (
            <Text style={styles.title_text}>{username} a le grigri</Text>
          )}
        </View>
        <View style={styles.details_container}>
          <Text style={styles.details_text}>Depuis {pointsDueToNow} jours</Text>
          <Text style={styles.details_text}>
            + {pointsDueToNow} points / {totalPoints} points au total
          </Text>
          <Text style={styles.details_text}>Donné par {lastUser}</Text>
        </View>
      </View>
    );
  }
}

const defaultAvatarUrl =
  'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonscout.com%2Ficon%2Favatar-370&psig=AOvVaw0PM2rAXKXG55S7Mos1E4Nb&ust=1605721674946000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOidjMORiu0CFQAAAAAdAAAAABAD';
const windowWidth = Dimensions.get('window').width;
const styles = EStyleSheet.create({
  main_container: {},
  title_container: {
    alignItems: 'center',
  },
  image: {
    height: windowWidth * 0.5,
    aspectRatio: 1,
    borderRadius: 1000,
  },
  image_container: {
    borderWidth: 7,
    borderRadius: 1000,
    borderColor: '#9D4141',
  },
  title_text: {
    fontSize: '30rem',
    color: '#E5E5E5',
    marginTop: '20rem',
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
  },
  details_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5rem',
  },
  details_text: {
    color: '#A3A3A3',
    marginTop: '10rem',
    fontFamily: 'Helvetica Neue',
    fontSize: '18rem',
    fontStyle: 'italic',
  },
});

export default CurrentPerson;
