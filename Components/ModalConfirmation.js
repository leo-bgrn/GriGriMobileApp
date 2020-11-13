import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

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
              Es-tu sûr de l'avoir refilé à {username} ?
            </Text>
          </View>
          <View style={styles.button_container}>
            <Button
              style={(styles.button_validate, styles.button)}
              onPress={() => this.props.sendGrigriTo(this.props.user)}
              title="Oui"
            />
            <Button
              style={(styles.button_cancel, styles.button)}
              onPress={this.props.cancelButton}
              title="Cancel"
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
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    flex: 0.1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  contentTitle: {
    fontSize: 20,
    marginBottom: 12,
  },
  button_container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  button: {
    flex: 1,
    width: '40%',
  },
});

export default ModalConfirmation;
