import * as constants from './constants';

export const addToCart = itm => {
  return {
    type: constants.ADD_TO_CART,
    itm
  };
};

export const removeFromCart = itm => {
  return {
    type: constants.REMOVE_FROM_CART,
    itm
  };
};
