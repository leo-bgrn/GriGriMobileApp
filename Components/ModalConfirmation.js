import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Button} from 'react-native-elements';
import {Icon} from 'react-native-elements';
import {connect} from 'react-redux';

class ModalConfirmation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {user} = this.props;
    const myself = this.props.users.filter(
      (user) => user.name == this.props.whoAmI,
    )[0];
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
            <Image
              style={[styles.image]}
              source={{
                uri: user.avatar,
              }}
            />
          </View>
          <View style={styles.button_container}>
            <Button
              buttonStyle={styles.cancel_button}
              onPress={this.props.cancelButton}
              title="Annuler"
              titleStyle={{color: 'red'}}
              containerStyle={{flex: 1}}
            />
            <Button
              buttonStyle={styles.button_validate}
              onPress={() => this.props.sendGrigriTo(this.props.user)}
              title="Confirmer"
              titleStyle={{color: '#EBEBEB'}}
              containerStyle={{flex: 1}}
            />
          </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button_container: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    marginBottom: 15,
  },
  cancel_button: {
    backgroundColor: '#F5F5F5',
    borderColor: '#D5D5D5',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 10,
  },
  button_validate: {
    backgroundColor: '#496E98',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 20,
  },
  image: {
    height: 80,
    width: 80,
    margin: 10,
    borderRadius: 100,
    borderColor: '#9D4141',
    borderWidth: 5,
  },
  imageSelf: {
    borderColor: '#619D41',
  },
});

const mapStateToProps = (state) => {
  return {
    whoAmI: state.setWhoAmI.whoAmI,
  };
};
export default connect(mapStateToProps)(ModalConfirmation);
