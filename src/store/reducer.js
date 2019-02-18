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
      return {
        ...state,
        total_items: state.total_items + 1,
        totalPrice: state.totalPrice + action.itm.cost,
        items: [
          ...state.items,
          Object.assign({}, action.itm, {
            qty: action.itm.qty + 1
          })
        ]
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        total_items: state.total_items - 1,
        totalPrice: state.totalPrice - action.itm.cost,
        items: [
          ...state.items,
          Object.assign({}, action.itm, {
            qty: action.itm.qty - 1
          })
        ]
      };

    default:
      return state;
  }
};

export default reducer;
