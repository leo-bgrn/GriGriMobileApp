import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

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
const styles = StyleSheet.create({
  main_container: {
    //backgroundColor: 'black',
    marginTop: 50,
  },
  title_container: {
    alignItems: 'center',
    //backgroundColor: 'yellow',
  },
  image: {
    height: 180,
    width: 180,
    borderRadius: 100,
  },
  image_container: {
    borderWidth: 7,
    borderRadius: 100,
    borderColor: '#9D4141',
  },
  title_text: {
    fontSize: 30,
    color: '#E5E5E5',
    margin: 20,
    fontWeight: 'bold',
    fontFamily: 'Helvetica Neue',
  },
  details_container: {
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'green',
    marginTop: 5,
  },
  details_text: {
    color: '#A3A3A3',
    marginTop: 10,
    fontFamily: "Helvetica Neue",
    fontSize: 18,
    fontStyle: 'italic'
  },
});

export default CurrentPerson;
