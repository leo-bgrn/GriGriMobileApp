import React from 'react';
import SelectUser from './SelectUser';
import {connect} from 'react-redux';
import Navigation from '../Navigation/Navigation';

class ChoiceSelectUserOrNavigation extends React.Component {
  render() {
    if (this.props.whoAmI === undefined) {
      return <SelectUser />;
    } else {
      return <Navigation />;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    whoAmI: state.setWhoAmI.whoAmI,
  };
};
export default connect(mapStateToProps)(ChoiceSelectUserOrNavigation);
