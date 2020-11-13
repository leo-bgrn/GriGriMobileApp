import React from 'react';
import {Text, View, StyleSheet, Button, TouchableOpacity} from 'react-native';

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
                <TouchableOpacity
                  key={user.id}
                  onPress={() => this.props.confirmationButton(user)}
                  style={styles.user_container}>
                  <Text style={styles.contentTitle}>{user.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <Button onPress={this.props.cancelButton} title="Cancel" />
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
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    flex: 0.4,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  users_container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  user_container: {
    height: 50,
    width: '46%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgb(0, 0, 255)',
    borderRadius: 10,
    borderWidth: 1,
    margin: '1%',
  },
});

export default ModalSelectUser;
