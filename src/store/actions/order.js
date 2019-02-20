import * as constants from './constants';
import axios from '../../axios.orders';

export const purchaseSuccess = (id, orderData) => {
  return {
    type: constants.PURCHASE_SUCCESS,
    orderId: id,
    orderData
  };
};

export const purchaseFail = error => {
  return {
    type: constants.PURCHASE_FAIL,
    error
  };
};

export const purchaseStart = () => {
  return {
    type: constants.PURCHASE_START
  };
};

export const purchase = orderData => {
  return dispatch => {
    dispatch(purchaseStart());
    axios
      .post('/orders.json', orderData)
      .then(response => {
        console.log('response.data', response.data);
        dispatch(purchaseSuccess(response.data.name, orderData));
      })
      .catch(error => {
        dispatch(purchaseFail(error));
      });
  };
};
