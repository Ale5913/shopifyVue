import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _af970e64 = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "pages/Category" */))
const _460dad22 = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "" */))
const _441df3be = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "" */))
const _7ca0582c = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "" */))
const _1fe9f478 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "" */))
const _0977c01f = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "" */))
const _3408b5d4 = () => interopDefault(import('..\\pages\\Checkout.vue' /* webpackChunkName: "pages/Checkout" */))
const _07778735 = () => interopDefault(import('..\\pages\\Checkout\\Billing.vue' /* webpackChunkName: "pages/Checkout/Billing" */))
const _b3b24d80 = () => interopDefault(import('..\\pages\\Checkout\\Payment.vue' /* webpackChunkName: "pages/Checkout/Payment" */))
const _273395e4 = () => interopDefault(import('..\\pages\\Checkout\\Shipping.vue' /* webpackChunkName: "pages/Checkout/Shipping" */))
const _10c1618b = () => interopDefault(import('..\\pages\\Checkout\\ThankYou.vue' /* webpackChunkName: "pages/Checkout/ThankYou" */))
const _d192bb8a = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "" */))
const _3226b42f = () => interopDefault(import('..\\pages\\Home.vue' /* webpackChunkName: "pages/Home" */))
const _149343c1 = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "pages/MyAccount" */))
const _fb795e40 = () => interopDefault(import('..\\pages\\MyAccount\\AdressBook.vue' /* webpackChunkName: "pages/MyAccount/AdressBook" */))
const _43b315b0 = () => interopDefault(import('..\\pages\\MyAccount\\BillingDetails.vue' /* webpackChunkName: "pages/MyAccount/BillingDetails" */))
const _6bb38436 = () => interopDefault(import('..\\pages\\MyAccount\\LoyaltyCard.vue' /* webpackChunkName: "pages/MyAccount/LoyaltyCard" */))
const _530156b4 = () => interopDefault(import('..\\pages\\MyAccount\\MyNewsletter.vue' /* webpackChunkName: "pages/MyAccount/MyNewsletter" */))
const _b5fe13e8 = () => interopDefault(import('..\\pages\\MyAccount\\MyProfile.vue' /* webpackChunkName: "pages/MyAccount/MyProfile" */))
const _26f85104 = () => interopDefault(import('..\\pages\\MyAccount\\MyReviews.vue' /* webpackChunkName: "pages/MyAccount/MyReviews" */))
const _9c7713f2 = () => interopDefault(import('..\\pages\\MyAccount\\OrderHistory.vue' /* webpackChunkName: "pages/MyAccount/OrderHistory" */))
const _d2f8d0ba = () => interopDefault(import('..\\pages\\MyAccount\\ShippingDetails.vue' /* webpackChunkName: "pages/MyAccount/ShippingDetails" */))
const _512bbce2 = () => interopDefault(import('..\\pages\\Nosotros.vue' /* webpackChunkName: "pages/Nosotros" */))
const _14165e62 = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "pages/Product" */))
const _4d49f428 = () => interopDefault(import('..\\pages\\Siette\\ContactUs.vue' /* webpackChunkName: "pages/Siette/ContactUs" */))
const _3127dee6 = () => interopDefault(import('..\\pages\\Siette\\Garantia.vue' /* webpackChunkName: "pages/Siette/Garantia" */))
const _75fec351 = () => interopDefault(import('..\\pages\\Siette\\Terms.vue' /* webpackChunkName: "pages/Siette/Terms" */))
const _927b8596 = () => interopDefault(import('..\\pages\\MyAccount.vue' /* webpackChunkName: "" */))
const _a288d17a = () => interopDefault(import('..\\pages\\Product.vue' /* webpackChunkName: "" */))
const _084680da = () => interopDefault(import('..\\pages\\Category.vue' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Category",
    component: _af970e64,
    name: "Category___es"
  }, {
    path: "/checkout",
    component: _460dad22,
    name: "checkout___es",
    children: [{
      path: "billing",
      component: _441df3be,
      name: "billing___es"
    }, {
      path: "payment",
      component: _7ca0582c,
      name: "payment___es"
    }, {
      path: "shipping",
      component: _1fe9f478,
      name: "shipping___es"
    }, {
      path: "thank-you",
      component: _0977c01f,
      name: "thank-you___es"
    }]
  }, {
    path: "/Checkout",
    component: _3408b5d4,
    name: "Checkout___es",
    children: [{
      path: "Billing",
      component: _07778735,
      name: "Checkout-Billing___es"
    }, {
      path: "Payment",
      component: _b3b24d80,
      name: "Checkout-Payment___es"
    }, {
      path: "Shipping",
      component: _273395e4,
      name: "Checkout-Shipping___es"
    }, {
      path: "ThankYou",
      component: _10c1618b,
      name: "Checkout-ThankYou___es"
    }]
  }, {
    path: "/de",
    component: _d192bb8a,
    name: "home___de"
  }, {
    path: "/en",
    component: _d192bb8a,
    name: "home___en"
  }, {
    path: "/Home",
    component: _3226b42f,
    name: "Home___es"
  }, {
    path: "/MyAccount",
    component: _149343c1,
    name: "MyAccount___es",
    children: [{
      path: "AdressBook",
      component: _fb795e40,
      name: "MyAccount-AdressBook___es"
    }, {
      path: "BillingDetails",
      component: _43b315b0,
      name: "MyAccount-BillingDetails___es"
    }, {
      path: "LoyaltyCard",
      component: _6bb38436,
      name: "MyAccount-LoyaltyCard___es"
    }, {
      path: "MyNewsletter",
      component: _530156b4,
      name: "MyAccount-MyNewsletter___es"
    }, {
      path: "MyProfile",
      component: _b5fe13e8,
      name: "MyAccount-MyProfile___es"
    }, {
      path: "MyReviews",
      component: _26f85104,
      name: "MyAccount-MyReviews___es"
    }, {
      path: "OrderHistory",
      component: _9c7713f2,
      name: "MyAccount-OrderHistory___es"
    }, {
      path: "ShippingDetails",
      component: _d2f8d0ba,
      name: "MyAccount-ShippingDetails___es"
    }]
  }, {
    path: "/Nosotros",
    component: _512bbce2,
    name: "Nosotros___es"
  }, {
    path: "/Product",
    component: _14165e62,
    name: "Product___es"
  }, {
    path: "/de/Category",
    component: _af970e64,
    name: "Category___de"
  }, {
    path: "/de/checkout",
    component: _460dad22,
    name: "checkout___de",
    children: [{
      path: "billing",
      component: _441df3be,
      name: "billing___de"
    }, {
      path: "payment",
      component: _7ca0582c,
      name: "payment___de"
    }, {
      path: "shipping",
      component: _1fe9f478,
      name: "shipping___de"
    }, {
      path: "thank-you",
      component: _0977c01f,
      name: "thank-you___de"
    }]
  }, {
    path: "/de/Checkout",
    component: _3408b5d4,
    name: "Checkout___de",
    children: [{
      path: "Billing",
      component: _07778735,
      name: "Checkout-Billing___de"
    }, {
      path: "Payment",
      component: _b3b24d80,
      name: "Checkout-Payment___de"
    }, {
      path: "Shipping",
      component: _273395e4,
      name: "Checkout-Shipping___de"
    }, {
      path: "ThankYou",
      component: _10c1618b,
      name: "Checkout-ThankYou___de"
    }]
  }, {
    path: "/de/Home",
    component: _3226b42f,
    name: "Home___de"
  }, {
    path: "/de/MyAccount",
    component: _149343c1,
    name: "MyAccount___de",
    children: [{
      path: "AdressBook",
      component: _fb795e40,
      name: "MyAccount-AdressBook___de"
    }, {
      path: "BillingDetails",
      component: _43b315b0,
      name: "MyAccount-BillingDetails___de"
    }, {
      path: "LoyaltyCard",
      component: _6bb38436,
      name: "MyAccount-LoyaltyCard___de"
    }, {
      path: "MyNewsletter",
      component: _530156b4,
      name: "MyAccount-MyNewsletter___de"
    }, {
      path: "MyProfile",
      component: _b5fe13e8,
      name: "MyAccount-MyProfile___de"
    }, {
      path: "MyReviews",
      component: _26f85104,
      name: "MyAccount-MyReviews___de"
    }, {
      path: "OrderHistory",
      component: _9c7713f2,
      name: "MyAccount-OrderHistory___de"
    }, {
      path: "ShippingDetails",
      component: _d2f8d0ba,
      name: "MyAccount-ShippingDetails___de"
    }]
  }, {
    path: "/de/Nosotros",
    component: _512bbce2,
    name: "Nosotros___de"
  }, {
    path: "/de/Product",
    component: _14165e62,
    name: "Product___de"
  }, {
    path: "/en/Category",
    component: _af970e64,
    name: "Category___en"
  }, {
    path: "/en/checkout",
    component: _460dad22,
    name: "checkout___en",
    children: [{
      path: "billing",
      component: _441df3be,
      name: "billing___en"
    }, {
      path: "payment",
      component: _7ca0582c,
      name: "payment___en"
    }, {
      path: "shipping",
      component: _1fe9f478,
      name: "shipping___en"
    }, {
      path: "thank-you",
      component: _0977c01f,
      name: "thank-you___en"
    }]
  }, {
    path: "/en/Checkout",
    component: _3408b5d4,
    name: "Checkout___en",
    children: [{
      path: "Billing",
      component: _07778735,
      name: "Checkout-Billing___en"
    }, {
      path: "Payment",
      component: _b3b24d80,
      name: "Checkout-Payment___en"
    }, {
      path: "Shipping",
      component: _273395e4,
      name: "Checkout-Shipping___en"
    }, {
      path: "ThankYou",
      component: _10c1618b,
      name: "Checkout-ThankYou___en"
    }]
  }, {
    path: "/en/Home",
    component: _3226b42f,
    name: "Home___en"
  }, {
    path: "/en/MyAccount",
    component: _149343c1,
    name: "MyAccount___en",
    children: [{
      path: "AdressBook",
      component: _fb795e40,
      name: "MyAccount-AdressBook___en"
    }, {
      path: "BillingDetails",
      component: _43b315b0,
      name: "MyAccount-BillingDetails___en"
    }, {
      path: "LoyaltyCard",
      component: _6bb38436,
      name: "MyAccount-LoyaltyCard___en"
    }, {
      path: "MyNewsletter",
      component: _530156b4,
      name: "MyAccount-MyNewsletter___en"
    }, {
      path: "MyProfile",
      component: _b5fe13e8,
      name: "MyAccount-MyProfile___en"
    }, {
      path: "MyReviews",
      component: _26f85104,
      name: "MyAccount-MyReviews___en"
    }, {
      path: "OrderHistory",
      component: _9c7713f2,
      name: "MyAccount-OrderHistory___en"
    }, {
      path: "ShippingDetails",
      component: _d2f8d0ba,
      name: "MyAccount-ShippingDetails___en"
    }]
  }, {
    path: "/en/Nosotros",
    component: _512bbce2,
    name: "Nosotros___en"
  }, {
    path: "/en/Product",
    component: _14165e62,
    name: "Product___en"
  }, {
    path: "/Siette/ContactUs",
    component: _4d49f428,
    name: "Siette-ContactUs___es"
  }, {
    path: "/Siette/Garantia",
    component: _3127dee6,
    name: "Siette-Garantia___es"
  }, {
    path: "/Siette/Terms",
    component: _75fec351,
    name: "Siette-Terms___es"
  }, {
    path: "/de/Siette/ContactUs",
    component: _4d49f428,
    name: "Siette-ContactUs___de"
  }, {
    path: "/de/Siette/Garantia",
    component: _3127dee6,
    name: "Siette-Garantia___de"
  }, {
    path: "/de/Siette/Terms",
    component: _75fec351,
    name: "Siette-Terms___de"
  }, {
    path: "/en/Siette/ContactUs",
    component: _4d49f428,
    name: "Siette-ContactUs___en"
  }, {
    path: "/en/Siette/Garantia",
    component: _3127dee6,
    name: "Siette-Garantia___en"
  }, {
    path: "/en/Siette/Terms",
    component: _75fec351,
    name: "Siette-Terms___en"
  }, {
    path: "/de/my-account/:pageName?",
    component: _927b8596,
    name: "my-account___de"
  }, {
    path: "/en/my-account/:pageName?",
    component: _927b8596,
    name: "my-account___en"
  }, {
    path: "/de/p/:id/:slug",
    component: _a288d17a,
    name: "product___de"
  }, {
    path: "/en/p/:id/:slug",
    component: _a288d17a,
    name: "product___en"
  }, {
    path: "/de/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _084680da,
    name: "category___de"
  }, {
    path: "/en/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _084680da,
    name: "category___en"
  }, {
    path: "/my-account/:pageName?",
    component: _927b8596,
    name: "my-account___es"
  }, {
    path: "/p/:id/:slug",
    component: _a288d17a,
    name: "product___es"
  }, {
    path: "/c/:slug_1/:slug_2?/:slug_3?/:slug_4?/:slug_5?",
    component: _084680da,
    name: "category___es"
  }, {
    path: "/",
    component: _d192bb8a,
    name: "home___es"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
