// server.js

// Import dependencies only once
const express = require("express"); // Ensure this is only declared once
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(bodyParser.json()); // To parse JSON bodies

// Simulate payment creation (payment initiation)
app.post("/create-payment", (req, res) => {
  // Simulate a payment creation with a simple payment ID
  const paymentDetails = {
    paymentId: "test_payment_123", // Simulated payment ID
    amount: req.body.amount,
    currency: "USD", // Simulate a currency (You can change it as per your test case)
    status: "created", // Payment is created but not completed yet
  };

  // Respond with simulated payment details
  res.json(paymentDetails);
});

// Simulate payment verification
app.post("/verify-payment", (req, res) => {
  const { paymentId } = req.body;

  // Simulating a simple payment verification logic
  if (paymentId === "test_payment_123") {
    return res.json({
      success: true,
      message: "Payment successful",
      paymentId: paymentId,
      status: "completed",
    });
  }

  // If paymentId doesn't match, return failure
  return res.json({
    success: false,
    message: "Payment failed or not found",
    paymentId: paymentId,
    status: "failed",
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});