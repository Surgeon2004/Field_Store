import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import "styles/Payment.css";

const Payment = () => {
  const location = useLocation();
  const history = useHistory();
  const [paymentStatus, setPaymentStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { amount, basketItems } = location.state || {}; // Get payment data from state

  const handlePayment = () => {
    // Simulate payment processing
    if (amount > 0) {
      setPaymentStatus("Payment processing...");

      // Simulate a delay for payment verification
      setTimeout(() => {
        setPaymentStatus("Payment Successful!");
        // You could redirect to a success page if you had one
        setErrorMessage("");
        setTimeout(() => {
          history.push("/"); // Redirect to home page after successful payment
        }, 2000);
      }, 2000); // Simulate a 2-second delay for payment
    } else {
      setErrorMessage("Invalid payment amount.");
    }
  };

  return (
    <div className="payment-container">
      <h1>Payment Page</h1>
      <div className="payment-details">
        <h2>Amount: Rs {amount}</h2>
        <h3>Your basket contains:</h3>
        <ul>
          {basketItems && basketItems.map((item, index) => <li key={index}>{item.name}</li>)}
        </ul>
      </div>
      {paymentStatus ? (
        <div className="payment-status">{paymentStatus}</div>
      ) : (
        <button className="pay-button" onClick={handlePayment}>
          Pay Now
        </button>
      )}
      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
};

export default Payment;