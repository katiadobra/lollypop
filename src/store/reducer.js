import * as actionTypes from './actions';
import data from '../assets/data.json';

const initialState = {
  items: data,
  total_items: null,
  totalPrice: 0
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

    default:
      return state;
  }
};

export default reducer;
