module.exports = {
  integrations: {
    shopify: {
      location: '@vue-storefront/shopify-api/server',
      configuration: {
        api: {
          domain: 'store.terrabionic.mx',
          storefrontAccessToken: 'f896a8e68e0c8da9c2ca4de744ba668b'
        },
        currency: 'USD',
        country: 'US'
      }
    }
  }
};
