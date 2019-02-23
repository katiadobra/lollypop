import * as constants from './constants';
import axios from '../../axios.orders';

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

export const setItems = items => {
  return {
    type: constants.SET_ITEMS,
    items: items
  };
};

export const fetchItemsFaild = () => {
  return {
    type: constants.FETCH_ITEMS_FAILD
  };
};

export const initItems = () => {
  return dispatch => {
    axios
      .get('https://api.myjson.com/bins/n7sxq.json')
      .then(res => {
        dispatch(setItems(res.data));
      })
      .catch(error => {
        dispatch(fetchItemsFaild());
      });
  };
};
