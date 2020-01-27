export const SIGN_IN_REQUEST = '@auth/SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = '@auth/SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = '@auth/SIGN_IN_FAILURE';

export const SIGN_OUT_REQUEST = '@auth/SIGN_OUT_REQUEST';
export const SIGN_OUT_SUCCESS = '@auth/SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = '@auth/SIGN_OUT_FAILURE';

export const INITIAL_STATE = {
  isSigned: null,
  isFailure: null,
  isLoading: null,
  token: null,
};
