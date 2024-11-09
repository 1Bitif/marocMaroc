module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/payment-intent',
        handler: 'order.createPaymentIntent',
        config: {
          policies: [],
          middlewares: [],
        },
      },
    ],
  };
  