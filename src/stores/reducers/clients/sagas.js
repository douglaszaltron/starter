import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import responder from '../../../services/responder';
import toaster from '../../../services/toaster';
import * as type from './types';

/**
 * Display a listing of the resource.
 */
export function* index() {
  try {
    const items = yield call(api.get, `v1/clients`);
    yield put({ type: type.INDEX_SUCCESS, payload: { items } });
  } catch (failed) {
    yield put({ type: type.INDEX_FAILURE, payload: { failed } });
    const message = responder.failed(failed);
    toaster(message)('error');
  }
}

/**
 * Update the specified resource in storage.
 */
export function* update({ payload }) {
  try {
    const { id, data } = payload;
    const response = yield call(api.patch, `clients/${id}`, data);
    const items = responder.success(response);
    yield put({ type: type.STORE_SUCCESS, payload: { items } });
    toaster('Cliente atualizado com sucesso!')('success');
  } catch (failed) {
    yield put({ type: type.STORE_FAILURE, payload: { failed } });
    const message = responder.failed(failed);
    toaster(message)('error');
  }
}

/**
 * Store a newly created resource in storage.
 */
export function* store({ payload }) {
  try {
    const { data } = payload;
    const response = yield call(api.post, 'v1/clients', data);
    const items = responder.success(response);
    yield put({ type: type.STORE_SUCCESS, payload: { items } });
    toaster('Cliente cadastrado com sucesso!')('success');
  } catch (failed) {
    yield put({ type: type.STORE_FAILURE, payload: { failed } });
    const message = responder.failed(failed);
    toaster(message)('error');
  }
}

/**
 * Remove the specified resource from storage.
 */
export function* destroy({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `v1/clients/${id}`);
    yield put({ type: type.DESTROY_SUCCESS, payload: { id } });
    toaster('Cliente excluído com sucesso!')('success');
  } catch (failed) {
    yield put({ type: type.DESTROY_FAILURE, payload: { failed } });
    const message = responder.failed(failed);
    toaster(message)('error');
  }
}

export default all([
  takeLatest(type.INDEX_REQUEST, index),
  takeLatest(type.UPDATE_REQUEST, update),
  takeLatest(type.STORE_REQUEST, store),
  takeLatest(type.DESTROY_REQUEST, destroy),
]);
