import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import './LollypopList.scss';

import Aux from '../../hoc/Aux';
import LollypopItem from '../../components/Lollypop/LollypopItem/LollypopItem';
import OrderSummary from '../../components/Order/OrderSummary/OrderSummary';
import Sidecart from '../../components/Lollypop/Sidecart/Sidecart';
import SideDrawer from '../../components/UI/SideDrawer/SideDrawer';

class LollypopList extends Component {
  state = {
    packaging: 0,
    thank_popup: false,
    loading: false,
    error: false,
    showSideCart: false
  };

  // popup = () => {
  //   this.setState({
  //     popup: !this.state.popup
  //   });
  // };

  // thank_popup = () => {
  //   this.setState({
  //     thank_popup: !this.state.thank_popup
  //   });
  // };

  sideCartToggleHandler = () => {
    this.setState(prevState => {
      return { showSideCart: !prevState.showSideCart };
    });
  };

  purchaseContinueHandler = () => {
    this.props.history.push('/checkout');
  };

  render() {
    const { packaging, showSideCart } = this.state;
    const {
      itms,
      total_items,
      totalPrice,
      onItemAdd,
      onItemRemove
    } = this.props;

    return (
      <Aux>
        <SideDrawer
          show={showSideCart}
          closed={this.sideCartToggleHandler}
          side="right"
          caption="Корзина"
        >
          <OrderSummary
            data={itms}
            price={totalPrice}
            packaging={packaging}
            purchaseContinued={this.purchaseContinueHandler}
          />
        </SideDrawer>

        <div className="list-container">
          {itms.map((item, id) => {
            return (
              <LollypopItem
                key={id}
                item={item}
                addToCart={() => onItemAdd(item)}
                removeFromCart={() => onItemRemove(item)}
              />
            );
          })}
        </div>

        <Sidecart
          data={itms}
          total_items={total_items}
          total={totalPrice}
          packaging={packaging}
          onOrderBtn={this.orderBtnHandler}
          onSideCartOpen={this.sideCartToggleHandler}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    itms: state.itemActions.items,
    totalPrice: state.itemActions.totalPrice,
    total_items: state.itemActions.total_items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onItemAdd: itm => dispatch(actions.addToCart(itm)),
    onItemRemove: itm => dispatch(actions.removeFromCart(itm))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LollypopList);
