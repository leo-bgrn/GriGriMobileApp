import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class CurrentPerson extends React.Component {
  render() {
    const {user, totalPoints, pointsDueToNow, lastUser} = this.props;
    return (
      <View style={[styles.main_container, styles.shadow]}>
        <View style={styles.title_container}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://scontent-mrs2-1.xx.fbcdn.net/v/t1.0-9/120859917_3794479147247737_3076943570474862987_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=_6z83iS_af4AX_Jc8ln&_nc_ht=scontent-mrs2-1.xx&oh=4f8e3164b10afd2aca8bc2402b2f4423&oe=5FD7F077',
            }}
          />
          <Text style={styles.title_text}>{user} a le grigri</Text>
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

const styles = StyleSheet.create({
  main_container: {
    height: 270,
    width: 300,
    maxWidth: '90%',
    maxHeight: '70%',
    backgroundColor: '#F5F5F5',
    borderWidth: 5,
    borderRadius: 20,
    borderColor: '#F5F5F5',
  },
  title_container: {
    flex: 0.5,
    alignItems: 'center',
    margin: 20,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  title_text: {
    fontSize: 23,
    color: '#3C5683',
    margin: 12,
    fontWeight: 'bold',
  },
  details_container: {
    marginTop: 17,
    flex: 0.5,
    justifyContent: 'center',
  },
  details_text: {
    color: '#3C5683',
    margin: 3,
    fontSize: 16,
    marginLeft: 10,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 20,
  },
});

export default CurrentPerson;
