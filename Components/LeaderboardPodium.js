import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class LeaderboardPodium extends React.Component {
  render() {
    const {userFirst, userSecond, userThird} = this.props;
    const userFirstAvatar =
      userFirst != null ? {uri: userFirst.avatar} : {uri: defaultAvatarUrl};
    const userFirstName = userFirst != null ? userFirst.name : '?';
    const userFirstPoints = userFirst != null ? userFirst.points : '?';
    const userSecondAvatar =
      userSecond != null ? {uri: userSecond.avatar} : {uri: defaultAvatarUrl};
    const userSecondName = userSecond != null ? userSecond.name : '?';
    const userSecondPoints = userSecond != null ? userSecond.points : '?';
    const userThirdAvatar =
      userThird != null ? {uri: userThird.avatar} : {uri: defaultAvatarUrl};
    const userThirdName = userThird != null ? userThird.name : '?';
    const userThirdPoints = userThird != null ? userThird.points : '?';

    return (
      <View style={styles.mainContainer}>
        <View style={styles.secondContainer}>
          <View style={styles.secondAvatarContainer}>
            <Image source={userSecondAvatar} style={styles.secondAvatar} />
          </View>
          <Text style={styles.secondPseudoText}>{userSecondName}</Text>
          <Text style={styles.secondPointsText}>{userSecondPoints} points</Text>
        </View>
        <View style={styles.firstContainer}>
          <View style={styles.firstAvatarContainer}>
            <Image source={userFirstAvatar} style={styles.firstAvatar} />
          </View>
          <Text style={styles.firstPseudoText}>{userFirstName}</Text>
          <Text style={styles.firstPointsText}>{userFirstPoints} points</Text>
        </View>
        <View style={styles.thirdContainer}>
          <View style={styles.thirdAvatarContainer}>
            <Image source={userThirdAvatar} style={styles.thirdAvatar} />
          </View>
          <Text style={styles.thirdPseudoText}>{userThirdName}</Text>
          <Text style={styles.thirdPointsText}>{userThirdPoints} points</Text>
        </View>
      </View>
    );
  }
}

const defaultAvatarUrl =
  'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonscout.com%2Ficon%2Favatar-370&psig=AOvVaw0PM2rAXKXG55S7Mos1E4Nb&ust=1605721674946000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOidjMORiu0CFQAAAAAdAAAAABAD';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstContainer: {
    flex: 0.33,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40
  },
  firstAvatar: {
    height: 110,
    width: 110,
    borderRadius: 100,
  },
  firstAvatarContainer: {
    borderWidth: 5,
    borderRadius: 100,
    borderColor: '#C9AA00',
  },
  firstPseudoText: {
    marginTop: 10,
    marginBottom: 5,
    fontFamily: 'Helvetica Neue',
    fontSize: 25,
    color: '#E5E5E5',
  },
  firstPointsText: {
    color: '#A3A3A3',
    fontFamily: 'Helvetica Neue',
    fontSize: 15,
    fontStyle: 'italic',
  },
  secondContainer: {
    flex: 0.33,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondAvatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  secondAvatarContainer: {
    borderWidth: 5,
    borderRadius: 100,
    borderColor: '#C0C0C0',
  },
  secondPseudoText: {
    marginTop: 10,
    marginBottom: 5,
    fontFamily: 'Helvetica Neue',
    fontSize: 25,
    color: '#E5E5E5',
  },
  secondPointsText: {
    color: '#A3A3A3',
    fontFamily: 'Helvetica Neue',
    fontSize: 15,
    fontStyle: 'italic',
  },
  thirdContainer: {
    flex: 0.33,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  thirdAvatar: {
    height: 80,
    width: 80,
    borderRadius: 100,
  },
  thirdAvatarContainer: {
    borderWidth: 5,
    borderRadius: 100,
    borderColor: '#CD7F32',
  },
  thirdPseudoText: {
    marginTop: 10,
    marginBottom: 5,
    fontFamily: 'Helvetica Neue',
    fontSize: 25,
    color: '#E5E5E5',
  },
  thirdPointsText: {
    color: '#A3A3A3',
    fontFamily: 'Helvetica Neue',
    fontSize: 15,
    fontStyle: 'italic',
  },
});

export default LeaderboardPodium;
