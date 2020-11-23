import React from 'react';
import {View, Dimensions} from 'react-native';
import CurrentPerson from './CurrentPerson';
import {getUsers, getCurrentLocation, postNewLocation} from '../API/GriGriApi';
import AsyncStorage from '@react-native-community/async-storage';
import Modal from 'react-native-modal';
import ModalSelectUser from './ModalSelectUser';
import ModalConfirmation from './ModalConfirmation';
import {connect} from 'react-redux';
import {Button} from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as Animatable from 'react-native-animatable';
import LottieView from 'lottie-react-native';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      username: null,
      totalPoints: 0,
      pointsDueToNow: 0,
      since: null,
      lastUser: null,
      isLoading: false,
      modalSelectUserIsVisible: false,
      modalConfirmationIsVisible: false,
      modalUserSelected: null,
      allUsers: [],
    };
    this.toggleModalSelectUser = this.toggleModalSelectUser.bind(this);
    this.toggleModalConfirmation = this.toggleModalConfirmation.bind(this);
    this.changeModal = this.changeModal.bind(this);
    this.sendGrigriTo = this.sendGrigriTo.bind(this);
  }

  _displayLoading() {
    return (
      <View style={styles.loading_container}>
        <LottieView
          source={require('../Animations/loading-dots.json')}
          autoPlay
          loop
          style={{width: windowWidth * 0.3, aspectRatio: 1}}
          colorFilters={[
            {
              keypath: 'Shape Layer 1',
              color: '#496E98',
            },
            {
              keypath: 'Shape Layer 2',
              color: '#496E98',
            },
            {
              keypath: 'Shape Layer 3',
              color: '#496E98',
            },
            {
              keypath: 'Shape Layer 4',
              color: '#496E98',
            },
            {
              keypath: 'Shape Layer 5',
              color: '#496E98',
            },
          ]}
        />
      </View>
    );
  }

  _loadData() {
    this.setState({isLoading: true});
    setTimeout(() => {
      getCurrentLocation().then((data) => {
        getUsers().then((users) => {
          const since = new Date(data.since);
          this.setState({
            user: data.user,
            username: data.user.name,
            totalPoints: Math.floor(data.user.totalPoints),
            pointsDueToNow: Math.floor(data.user.pointsDueToNow),
            since: since,
            lastUser: data.lastUser,
            isLoading: false,
            allUsers: users,
          });
        });
      });
    }, 500);
  }

  componentDidMount() {
    this._loadData();
  }

  toggleModalSelectUser() {
    this.setState({
      modalSelectUserIsVisible: !this.state.modalSelectUserIsVisible,
    });
  }

  toggleModalConfirmation() {
    this.setState({
      modalConfirmationIsVisible: !this.state.modalConfirmationIsVisible,
    });
  }

  changeModal(user) {
    this.toggleModalSelectUser();
    this.setState({
      modalUserSelected: user,
    });
    setTimeout(() => this.toggleModalConfirmation(), 500);
  }

  sendGrigriTo(user) {
    postNewLocation(user.id).then(() => this.toggleModalConfirmation());
    setTimeout(() => this._loadData(), 1000);
  }

  async _deleteCache() {
    try {
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
    } catch (error) {
      console.error('Error clearing app data.');
    }
  }

  displayDeleteCache() {
    return (
      <Button
        buttonStyle={styles.button_style}
        titleStyle={styles.title_button_style}
        onPress={this._deleteCache}
        title="Delete cache"
      />
    );
  }

  render() {
    if (this.state.isLoading) {
      return this._displayLoading();
    }
    return (
      <Animatable.View style={styles.main_container}>
        <Animatable.View
          animation="slideInDown"
          style={styles.currentPersonContainer}>
          <CurrentPerson
            user={this.state.user}
            totalPoints={this.state.totalPoints}
            pointsDueToNow={this.state.pointsDueToNow}
            since={this.state.since}
            lastUser={this.state.lastUser}
          />
        </Animatable.View>
        <Animatable.View
          animation="fadeIn"
          delay={1000}
          style={styles.buttonContainer}>
          {this.props.whoAmI === this.state.username && (
            <Button
              buttonStyle={styles.button_style}
              titleStyle={styles.title_button_style}
              onPress={this.toggleModalSelectUser}
              title="Je l'ai refilé à quelqu'un"
            />
          )}
        </Animatable.View>
        <Modal isVisible={this.state.modalSelectUserIsVisible}>
          <ModalSelectUser
            cancelButton={this.toggleModalSelectUser}
            users={this.state.allUsers}
            confirmationButton={this.changeModal}
          />
        </Modal>
        <Modal isVisible={this.state.modalConfirmationIsVisible}>
          <ModalConfirmation
            cancelButton={this.toggleModalConfirmation}
            user={this.state.modalUserSelected}
            users={this.state.allUsers}
            sendGrigriTo={this.sendGrigriTo}
          />
        </Modal>
      </Animatable.View>
    );
  }
}
const windowWidth = Dimensions.get('window').width;
const styles = EStyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  currentPersonContainer: {
    flex: 0.75,
    backgroundColor: '#496E98',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 20,
  },
  buttonContainer: {
    flex: 0.25,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-10rem',
  },
  loading_container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#EBEBEB',
  },
  button_style: {
    backgroundColor: '#496E98',
    marginTop: '15rem',
    borderRadius: 10,
  },
  title_button_style: {
    color: '#EBEBEB',
  },
});

const mapStateToProps = (state) => {
  return {
    whoAmI: state.setWhoAmI.whoAmI,
  };
};
export default connect(mapStateToProps)(Home);
