import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

class ModalSelectUser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.background_container}>
        <View style={styles.main_container}>
          <View style={styles.title_container}>
            <Text style={styles.contentTitle}>A qui l'as tu refilé ?</Text>
          </View>
          <View style={styles.users_container}>
            {this.props.users.map((user) => {
              return (
                <Button
                  key={user.id}
                  onPress={() => this.props.confirmationButton(user)}
                  buttonStyle={styles.user_container}
                  title={user.name}
                  containerStyle={{width: '50%'}}></Button>
              );
            })}
          </View>
          <Button
            onPress={this.props.cancelButton}
            title="Cancel"
            buttonStyle={styles.cancel_button}
            titleStyle={{color: 'red'}}
            containerStyle={{width: '50%'}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  main_container: {
    backgroundColor: '#F5F5F5',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    flex: 0.4,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#3C5683',
  },
  users_container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
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
    borderRadius: 10
  },
});

export default ModalSelectUser;
