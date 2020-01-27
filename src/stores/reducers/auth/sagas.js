import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history';
import { signInFailure, signInSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post('/signin'), {
      email,
      password,
    });

    const { access_token } = response.data.items;

    if (typeof access_token === typeof undefined) {
      console.error('Falha na autenticação, verifique seus dados');
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${access_token}`;
    const user = yield call(api.get('/me'));

    yield put(signInSuccess(access_token, user.data.items));

    history.push('/home');
  } catch (error) {
    const failed = error.response
      ? error.response.data
      : { errors: { message: error.code } };

    yield put(signInFailure({ failed }));
    console.error(failed.errors.message);
  }
}

export function setToken({ payload }) {
  if (typeof payload === typeof undefined) {
    return;
  }

  const { token } = payload.auth;

  if (typeof token !== typeof undefined) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', action => setToken(action)),
  takeLatest('@auth/SIGN_IN_REQUEST', action => signIn(action)),
  takeLatest('@auth/SIGN_OUT', () => signOut()),
]);
