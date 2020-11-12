import {createStore} from 'redux';
import setWhoAmI from './Reducers/userReducer';

import {persistCombineReducers} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
export default createStore(
  persistCombineReducers(rootPersistConfig, {setWhoAmI}),
);
