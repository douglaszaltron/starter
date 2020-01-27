import produce from 'immer';

const INITIAL_STATE = {
  token: null,
  isSigned: false,
  isLoading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.isLoading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        const { payload } = action;
        draft.token = payload.token;
        draft.isSigned = true;
        draft.isLoading = false;
        break;
      }
      case '@auth/SIGN_IN_FAILURE': {
        draft.isLoading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.isSigned = false;
        break;
      }
      default:
    }
  });
}
