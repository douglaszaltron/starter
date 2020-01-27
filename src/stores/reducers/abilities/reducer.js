import produce from 'immer';
import * as type from './types';

export default function reducer(state = type.INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case type.INDEX_REQUEST:
      case type.STORE_REQUEST:
      case type.UPDATE_REQUEST:
      case type.DESTROY_REQUEST: {
        draft.isFailure = null;
        draft.isLoading = true;
        return draft;
      }

      case type.INDEX_SUCCESS: {
        const { items } = action.payload;
        draft.isLoading = false;
        draft.items = items;
        return draft;
      }

      case type.STORE_SUCCESS: {
        const { items } = action.payload;
        draft.isLoading = false;
        draft.items = [items].concat(state.items);
        return draft;
      }

      case type.UPDATE_SUCCESS: {
        const { id, ...rest } = action.payload;
        draft.isLoading = false;
        draft.items = state.items.map(item =>
          item.id === id ? { ...item, ...rest.items } : item
        );
        return draft;
      }

      case type.DESTROY_SUCCESS: {
        const { id } = action.payload;
        draft.isLoading = false;
        draft.items = state.items.filter(item => item.id !== id);
        return draft;
      }

      case type.INDEX_FAILURE:
      case type.STORE_FAILURE:
      case type.UPDATE_FAILURE:
      case type.DESTROY_FAILURE: {
        const { failed } = action.payload;
        draft.isFailure = failed;
        draft.isLoading = false;
        return draft;
      }

      default:
        return draft;
    }
  });
}
