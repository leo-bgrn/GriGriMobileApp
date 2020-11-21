/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import Store from './Store/configureStore';
import ChoiceSelectUserOrNavigation from './Components/ChoiceSelectUserOrNavigation';
import {Dimensions} from 'react-native';

import {PersistGate} from 'redux-persist/es/integration/react';
import {persistStore} from 'redux-persist';
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;
EStyleSheet.build({$rem: entireScreenWidth / 380});

const App = () => {
  let persistor = persistStore(Store);
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <ChoiceSelectUserOrNavigation />
      </PersistGate>
    </Provider>
  );
};
export default App;
