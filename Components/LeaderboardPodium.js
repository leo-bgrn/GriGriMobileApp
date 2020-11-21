import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

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
          <Image
            source={require('../Images/ic_crown.png')}
            style={styles.crownImage}
          />
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
const windowWidth = Dimensions.get('window').width;
const styles = EStyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  firstContainer: {
    flex: 0.33,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  firstAvatar: {
    aspectRatio: 1,
    width: windowWidth * 0.25,
    borderRadius: 100,
  },
  crownImage: {
    height: windowWidth * 0.08,
    aspectRatio: 1,
    margin: "5rem",
  },
  crownTextContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstAvatarContainer: {
    borderWidth: 5,
    borderRadius: 100,
    borderColor: '#C9AA00',
  },
  firstPseudoText: {
    marginTop: "10rem",
    marginBottom: "5rem",
    fontFamily: 'Helvetica Neue',
    fontSize: '25rem',
    color: '#E5E5E5',
  },
  firstPointsText: {
    color: '#A3A3A3',
    fontFamily: 'Helvetica Neue',
    fontSize: '18rem',
    fontStyle: 'italic',
    marginBottom: "15rem",
  },
  secondContainer: {
    flex: 0.33,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  secondAvatar: {
    aspectRatio: 1,
    width: windowWidth * 0.22,
    borderRadius: 100,
  },
  secondAvatarContainer: {
    borderWidth: "5rem",
    borderRadius: 100,
    borderColor: '#C0C0C0',
  },
  secondPseudoText: {
    marginTop: "10rem",
    marginBottom: "5rem",
    fontFamily: 'Helvetica Neue',
    fontSize: "25rem",
    color: '#E5E5E5',
  },
  secondPointsText: {
    color: '#A3A3A3',
    fontFamily: 'Helvetica Neue',
    fontSize: '18rem',
    fontStyle: 'italic',
    marginBottom: "15rem",
  },
  thirdContainer: {
    flex: 0.33,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  thirdAvatar: {
    aspectRatio: 1,
    width: windowWidth * 0.2,
    borderRadius: 100,
  },
  thirdAvatarContainer: {
    borderWidth: "5rem",
    borderRadius: 100,
    borderColor: '#CD7F32',
  },
  thirdPseudoText: {
    marginTop: "10rem",
    marginBottom: "5rem",
    fontFamily: 'Helvetica Neue',
    fontSize: '25rem',
    color: '#E5E5E5',
  },
  thirdPointsText: {
    color: '#A3A3A3',
    fontFamily: 'Helvetica Neue',
    fontSize: '18rem',
    fontStyle: 'italic',
    marginBottom: "10rem",
  },
});

export default LeaderboardPodium;
