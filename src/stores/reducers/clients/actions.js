import * as type from './types';

/**
 * Display a listing of the resource.
 */
export function index() {
  return { type: type.INDEX_REQUEST };
}

/**
 * Update the specified resource in storage.
 */
export function update(id, data) {
  return {
    type: type.UPDATE_REQUEST,
    payload: { id, data },
  };
}

/**
 * Store a newly created resource in storage.
 */
export function store(data) {
  return {
    type: type.STORE_REQUEST,
    payload: { data },
  };
}

/**
 * Remove the specified resource from storage.
 */
export function destroy(id) {
  return {
    type: type.DESTROY_REQUEST,
    payload: { id },
  };
}
