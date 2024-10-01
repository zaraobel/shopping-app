const express = require('express');
const router = express.Router(); // Create an Express router

// In your backend server (Node.js/Express)
const stripe = require('stripe')('sk_test_51PlpmJRvF9JCAQqQFSC1cPw0EE492BETTp3yiMMvJ8l7aR7bBvOOtxYSARgMBRz0VfX7qVXlbk8PQJMkGvd9fFkC00YYM3vF5x');

router.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,  // Amount should be passed in cents (e.g., 1000 for $10)
      currency: 'usd',
    });

    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

module.exports = router;