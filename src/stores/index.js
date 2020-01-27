import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import createStore from './config/createStore';
import persistReducers from './config/persistReducers';
import rootReducer from './reducers/rootReducer';
import rootSaga from './reducers/rootSaga';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : undefined;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middleware = [sagaMiddleware];

const store = createStore(persistReducers(rootReducer), middleware);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
