import React from 'react';
import {View, Image, Text, Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as Animatable from 'react-native-animatable';

class LeaderboardPlace extends React.Component {
  render() {
    const {user, index} = this.props;
    const userFourthAvatar =
      user != null ? {uri: user.avatar} : {uri: defaultAvatarUrl};
    const userFourthName = user != null ? user.name : '?';
    const userFourthPoints = user != null ? user.points : '?';
    return (
      <Animatable.View
        animation="slideInRight"
        delay={2600 + 300 * index}
        style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image source={userFourthAvatar} style={styles.avatar} />
        </View>
        <Text style={styles.pseudoText}>{userFourthName}</Text>
        <Text style={styles.pointsText}>{userFourthPoints} points</Text>
      </Animatable.View>
    );
  }
}

const defaultAvatarUrl =
  'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficonscout.com%2Ficon%2Favatar-370&psig=AOvVaw0PM2rAXKXG55S7Mos1E4Nb&ust=1605721674946000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOidjMORiu0CFQAAAAAdAAAAABAD';
const windowHeight = Dimensions.get('window').height;
const styles = EStyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '10rem',
    marginLeft: '20rem',
    marginRight: '20rem',
    marginBottom: '10rem',
    borderRadius: '20rem',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 20,
  },
  avatarContainer: {
    flex: 0.3,
  },
  avatar: {
    height: (windowHeight * 0.6) / 4 / 2,
    aspectRatio: 1,
    borderRadius: 100,
    margin: '15rem',
  },
  pseudoText: {
    margin: '10rem',
    fontFamily: 'Helvetica Neue',
    fontSize: '25rem',
    color: '#585858',
    flex: 0.3,
  },
  pointsText: {
    margin: '10rem',
    color: '#A3A3A3',
    fontFamily: 'Helvetica Neue',
    fontSize: '15rem',
    fontStyle: 'italic',
    marginTop: '15rem',
    flex: 0.3,
  },
});

export default LeaderboardPlace;
