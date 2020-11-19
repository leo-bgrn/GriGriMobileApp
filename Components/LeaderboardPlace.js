import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

class LeaderboardPlace extends React.Component {
  render() {
    const {user} = this.props;
    const userFourthAvatar =
      user != null ? {uri: user.avatar} : {uri: defaultAvatarUrl};
    const userFourthName = user != null ? user.name : '?';
    const userFourthPoints = user != null ? user.points : '?';
    return (
      <View style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image source={userFourthAvatar} style={styles.avatar} />
        </View>
        <Text style={styles.pseudoText}>{userFourthName}</Text>
        <Text style={styles.pointsText}>{userFourthPoints} points</Text>
      </View>
    );
  }
}

const defaultAvatarUrl =
  'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonscout.com%2Ficon%2Favatar-370&psig=AOvVaw0PM2rAXKXG55S7Mos1E4Nb&ust=1605721674946000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOidjMORiu0CFQAAAAAdAAAAABAD';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 20,
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 100,
    margin: 15,
  },
  avatarContainer: {},
  pseudoText: {
    margin: 10,
    fontFamily: 'Helvetica Neue',
    fontSize: 25,
    color: '#585858',
  },
  pointsText: {
    margin: 10,
    color: '#A3A3A3',
    fontFamily: 'Helvetica Neue',
    fontSize: 15,
    fontStyle: 'italic',
    marginTop: 15,
  },
});

export default LeaderboardPlace;
