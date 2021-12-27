import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      {cartItems.length !== 0 ? (
        <>
          <div className="cart-items">
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))}
          </div>
          <CustomButton
            onClick={() => {
              history.push("/checkout");
              dispatch(toggleCartHidden());
            }}
          >
            GO TO CHECKOUT
          </CustomButton>
        </>
      ) : (
        <div className="empty-text">Nothing here yet</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
