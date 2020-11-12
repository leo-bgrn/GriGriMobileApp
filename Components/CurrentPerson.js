import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class CurrentPerson extends React.Component {
  render() {
    const {user, totalPoints, pointsDueToNow, lastUser} = this.props;
    return (
      <View style={styles.text_container}>
        <View style={styles.title_container}>
          <Text style={styles.text}>{user} est en possession du grigri</Text>
        </View>
        <Text>Depuis {pointsDueToNow} jours</Text>
        <Text>
          + {pointsDueToNow} points / {totalPoints} points au total
        </Text>
        <Text>Précédemment chez {lastUser}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text_container: {
    justifyContent: 'center',
    height: 100,
    width: 300,
    backgroundColor: '#e0e0e0',
  },
  title_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CurrentPerson;
