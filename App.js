/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-navigation';
import Navigation from './Navigation/Navigation';
import {Provider} from 'react-redux';
import Store from './Store/configureStore';
import ChoiceSelectUserOrNavigation from './Components/ChoiceSelectUserOrNavigation';

import {PersistGate} from 'redux-persist/es/integration/react';
import {persistStore} from 'redux-persist';

const App = () => {
  let persistor = persistStore(Store);
  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={{flex: 1}}>
          <ChoiceSelectUserOrNavigation />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};
export default App;
