import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  timeout: 0,
  key: '@simpleagro',
  storage,
  blacklist: [],
  whitelist: ['auth', 'user'],
};

export default reducers => {
  return persistReducer(persistConfig, reducers);
};
