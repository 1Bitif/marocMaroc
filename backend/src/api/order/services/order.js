'use strict';
const stripe = require('stripe')(process.env.STRIPE_KEY);

module.exports = {
  createPaymentIntent: async (amount) => {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd',
    });

    return paymentIntent;
  },
};
