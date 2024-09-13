const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Make sure to add your Stripe secret key to your environment variables
console.log('Stripe secret key:', process.env.STRIPE_SECRET_KEY);

// no pool needed for payment routes
const paymentRoutes = () => {
  router.post('/', async (req, res) => {
    console.log('Request received at /');
    const { amount } = req.body;
  
    if (!amount) {
      console.log('No amount provided');
      return res.status(400).json({ error: 'Amount is required' });
    }
  
    try {
      console.log('Creating payment intent with amount:', amount);
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: 'usd',
      });
  
      console.log('Payment intent created:', paymentIntent.client_secret);
      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (error) {
      console.error('Stripe error:', error.message);
      res.status(500).json({ error: error.message });
    }
  });

  return router;
}

module.exports = paymentRoutes;
