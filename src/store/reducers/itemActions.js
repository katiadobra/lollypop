import * as actionTypes from '../actions/constants';

const initialState = {
  items: null,
  total_items: 0,
  totalPrice: 0,
  error: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const updatedItems = state.items.map(item => {
        if (item === action.itm) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });
      return {
        ...state,
        total_items: state.total_items + 1,
        totalPrice: state.totalPrice + action.itm.cost,
        items: updatedItems
      };

    case actionTypes.REMOVE_FROM_CART:
      const updatedItemsForRemoving = state.items.map(item => {
        if (item === action.itm) {
          return { ...item, qty: item.qty - 1 };
        }
        return item;
      });
      return {
        ...state,
        total_items: state.total_items - 1,
        totalPrice: state.totalPrice - action.itm.cost,
        items: updatedItemsForRemoving
      };

    case actionTypes.SET_ITEMS:
      return {
        ...state,
        items: action.items,
        error: false
      };

    case actionTypes.FETCH_ITEMS_FAILD:
      return {
        ...state,
        error: true
      };

    default:
      return state;
  }
};

export default reducer;
