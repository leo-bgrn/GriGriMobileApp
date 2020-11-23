import React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {Icon} from 'react-native-elements';

class ModalSelectUser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {users} = this.props;
    const myself = users.filter((user) => user.name == this.props.whoAmI)[0];
    return (
      <View style={styles.backgroundContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.titleContainer}>
            <Image
              style={[styles.image, styles.imageSelf]}
              source={{
                uri: myself.avatar,
              }}
            />
            <Icon name="chevron-forward-outline" type="ionicon" />
            <View style={styles.questionMarkContainer}>
              <Text style={styles.questionMarkText}>?</Text>
            </View>
          </View>
          <View style={styles.usersContainer}>
            {users.map((user) => {
              if (user === myself) {
                return <View key={300}></View>;
              }
              return (
                <TouchableOpacity
                  key={user.id}
                  onPress={() => this.props.confirmationButton(user)}>
                  <Image
                    key={100 + user.id}
                    style={styles.image}
                    source={{
                      uri: user.avatar,
                    }}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <Button
            onPress={this.props.cancelButton}
            title="Annuler"
            buttonStyle={styles.cancel_button}
            titleStyle={{color: '#9D4141'}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    backgroundColor: '#F5F5F5',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#3C5683',
  },
  usersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  user_container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#596274',
    borderRadius: 10,
    borderWidth: 1,
    margin: 3,
    height: 50,
    backgroundColor: '#3C5683',
  },
  user_content: {
    fontSize: 20,
    color: '#3C5683',
  },
  cancel_button: {
    backgroundColor: '#F5F5F5',
    borderColor: '#D5D5D5',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 20,
  },
  image: {
    height: 80,
    width: 80,
    margin: 10,
    borderRadius: 100,
  },
  imageSelf: {
    borderWidth: 5,
    borderColor: '#9D4141',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionMarkContainer: {
    height: 80,
    width: 80,
    margin: 10,
    borderWidth: 5,
    borderRadius: 100,
    borderColor: '#707070',
    backgroundColor: '#707070',
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionMarkText: {
    color: '#EBEBEB',
    fontFamily: 'Copperplate',
    fontSize: 84,
  },
});

const mapStateToProps = (state) => {
  return {
    whoAmI: state.setWhoAmI.whoAmI,
  };
};
export default connect(mapStateToProps)(ModalSelectUser);
