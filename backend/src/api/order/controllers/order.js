'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({
  async createPaymentIntent(ctx) {
    const { amount } = ctx.request.body;

    try {
      const paymentIntent = await strapi.service('api::order.order').createPaymentIntent(amount);
      ctx.send({ clientSecret: paymentIntent.client_secret });
    } catch (err) {
      ctx.send({ error: 'Failed to create payment intent' }, 500);
    }
  },
}));
