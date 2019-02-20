import * as constants from '../actions/constants';

const initialState = {
  orders: [],
  loading: false,
  purchased: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.PURCHASE_INIT:
      return {
        ...state,
        purchased: false
      };
    case constants.PURCHASE_START:
      return {
        ...state,
        loading: true
      };
    case constants.PURCHASE_SUCCESS:
      const newOrder = {
        ...action.orderData,
        ...action.orderId
      };
      return {
        ...state,
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder)
      };
    case constants.PURCHASE_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
