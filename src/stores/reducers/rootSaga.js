import { all } from 'redux-saga/effects';
import auth from './auth/sagas';
import clients from './clients/sagas';

export default function* rootSaga() {
  return yield all([auth, clients]);
}
