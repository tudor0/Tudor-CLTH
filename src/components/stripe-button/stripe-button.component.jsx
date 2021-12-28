import React from "react";
import StripeCheckout from "react-stripe-checkout";
import logo from "../../assets/logo.png";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KBhcNGMpNw4JtvpZ0DUif7sECLMpD8ItxqFAqHWrvy8Z895hq5clwluqlbmoXpWvKgmLM7erIcAYUyCsIxkvgQT004talQ0Lp";
  const onToken = (token) => {
    console.log(token);
  };
  return (
    <StripeCheckout
      label="Pay now"
      name="Tudor CLTH"
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
