import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

class ModalConfirmation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {user} = this.props;
    const username = user != null ? user.name : '??';
    return (
      <View style={styles.background_container}>
        <View style={styles.main_container}>
          <View style={styles.title_container}>
            <Text style={styles.contentTitle}>
              {username} ? Tu es sûr ?
            </Text>
          </View>
          <View style={styles.button_container}>
            <Button
              buttonStyle={styles.button_validate}
              onPress={() => this.props.sendGrigriTo(this.props.user)}
              title="Oui"
              titleStyle={{color: '#3C5683'}}
              containerStyle={{flex: 1}}
            />
            <Button
              buttonStyle={styles.cancel_button}
              onPress={this.props.cancelButton}
              title="Cancel"
              titleStyle={{color: 'red'}}
              containerStyle={{flex: 1}}
            />
          </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    flex: 0.15,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  contentTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 18,
    color: '#3C5683',
    margin: 20,
  },
  button_container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  cancel_button: {
    backgroundColor: '#F5F5F5',
    borderColor: '#D5D5D5',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 20,
  },
  button_validate: {
    backgroundColor: '#F5F5F5',
    borderColor: '#D5D5D5',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 10,
  },
});

export default ModalConfirmation;
