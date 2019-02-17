import * as actionTypes from './actions';

const initialState = {
  total_items: null,
  totalPrice: 4
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        total_items: {
          ...state.total_items,
          [action.total_items]: state.total_items + 1
          // [action.items.id]: state.total_items[action.itemId] + 1
        }
        // totalPrice: state.totalPrice + state.items[action.itemId]
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        total_items: {
          ...state.total_items,
          [action.total_items]: state.total_items - 1
          // [action.itemId]: state.total_items[action.itemId] - 1
        }
      };
    default:
      return state;
  }
};

export default reducer;
