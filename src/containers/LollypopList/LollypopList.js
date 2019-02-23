import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import axios from 'axios';

import './LollypopList.scss';
import Aux from '../../hoc/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';

import LollypopItem from '../../components/Lollypop/LollypopItem/LollypopItem';
import OrderSummary from '../../components/Order/OrderSummary/OrderSummary';
import Sidecart from '../../components/Lollypop/Sidecart/Sidecart';
import SideDrawer from '../../components/UI/SideDrawer/SideDrawer';

class LollypopList extends Component {
  state = {
    packaging: 0,
    showSideCart: false
  };

  componentDidMount() {
    console.log(this.props);
    this.props.onInitItems();
  }

  sideCartToggleHandler = () => {
    this.setState(prevState => {
      return { showSideCart: !prevState.showSideCart };
    });
  };

  purchaseContinueHandler = () => {
    this.props.onInitPurchase();
    this.props.history.push('/checkout');
  };

  render() {
    const { packaging, showSideCart } = this.state;
    const {
      itms,
      total_items,
      totalPrice,
      onItemAdd,
      onItemRemove,
      error
    } = this.props;

    let lollypop = error ? <p>Невозможно загрузить товары</p> : <Spinner />;

    if (itms) {
      lollypop = (
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
      );
    }

    return (
      <Aux>
        {itms &&
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
          </SideDrawer>}

        {lollypop}

        {itms &&
          <Sidecart
            data={itms}
            total_items={total_items}
            total={totalPrice}
            packaging={packaging}
            onSideCartOpen={this.sideCartToggleHandler}
            ordered={this.purchaseHandler}
          />}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    itms: state.itemActions.items,
    totalPrice: state.itemActions.totalPrice,
    total_items: state.itemActions.total_items,
    error: state.itemActions.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onItemAdd: itm => dispatch(actions.addToCart(itm)),
    onItemRemove: itm => dispatch(actions.removeFromCart(itm)),
    onInitItems: () => dispatch(actions.initItems()),
    onInitPurchase: () => dispatch(actions.purchaseInit())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withErrorHandler(LollypopList, axios)
);
