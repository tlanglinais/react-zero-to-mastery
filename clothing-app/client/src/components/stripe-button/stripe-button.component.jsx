import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GqjtnElUvemfCnbLxOhkQzrtDMMIwHQk2nOo8yKdTuzCEXr5cbVkQ16PeJl2eGBGDOPgNWm4bih9lmiOeoH6ddN00ucaEZ7HR";

  const onToken = token => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amound: priceForStripe,
        token,
      },
    })
      .then(response => {
        alert("Payment successful");
      })
      .catch(error => {
        console.log("Payment error: ", JSON.parse(error));
        alert("There was an issue with your payment.");
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
