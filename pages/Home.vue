<template>
  <div id="home">
    <SfHero class="hero">
      <SfHeroItem
        v-for="(hero, i) in heroes"
        :key="i"
        :title="hero.title"
        :subtitle="hero.subtitle"
        :button-text="hero.buttonText"
        :background="hero.background"
        :image="hero.image"
        :class="hero.className"
      />
    </SfHero>
    <template> 
        
      <!-- <SfBanner
        class="sf-banner--right"
        title="Tener tu tienda en Shopify nunca fue tan fácil"
        subtitle="Summer shoes"
        description="Nuestra meta es garantizar el éxito de tu empresa."      
        buttonText="Iniciar mi tienda"
        background="#e1e3e2"
        image="/homepage/bannerT.jpeg"
        
      /> -->
      
              

      
    </template>
    
    <template>
      <div>
        
         
      </div>
    </template>
  
    
    <LazyHydrate when-visible>
      <RelatedProducts
        :products="products"
        :loading="productsLoading"
        title="Servicios"
      />
    </LazyHydrate>

    <LazyHydrate when-visible>
      <SfCallToAction
        title="¡Trasciende Fronteras!"
        button-text="Iniciar mi tienda"
        description="Nuestra meta es hacer e-commerce innovadores que trascienden fronteras. ¡Comienza hoy!"
        image="/homepage/bg-phrase.png"
        class="call-to-action"
        link="https://calendly.com/terrabionic/demo-shopify?month=2022-03" />
      />
    </LazyHydrate>   
    <SfSection
      titleHeading="Acreditaciones"
      subtitleHeading=""
      :levelHeading="3"
    >
      <div >
      <SfImage
        src="https://cdn.shopify.com/s/files/1/1444/7826/files/shopify_expert_160x160@2x.png?v=1502479632"
        :srcsets="[]"
        alt="Vila stripe maxi shirt dress"
        :width="175"
        :height="47"
        >
          
        </SfImage>
        <SfImage
          src="https://cdn.shopify.com/s/files/1/1444/7826/files/amipci_160x160@2x.png?v=1502479664"
          :srcsets="[]"
          alt="Vila stripe maxi shirt dress"
          :width="175"
          :height="47"
        >
          
        </SfImage>
        <SfImage
          src="https://cdn.shopify.com/s/files/1/1444/7826/files/cmmi_160x160@2x.png?v=1502479674"
          :srcsets="[]"
          alt="Vila stripe maxi shirt dress"
          :width="175"
          :height="47"
        >
          Custom overlay
        </SfImage>
        <SfImage
          src="https://cdn.shopify.com/s/files/1/1444/7826/files/google_partner_160x160@2x.png?v=1502479688"
          :srcsets="[]"
          alt="Vila stripe maxi shirt dress"
          :width="135"
          :height="47"
        >
          
        </SfImage>
        <SfImage
          src="https://cdn.shopify.com/s/files/1/1444/7826/files/bing_160x160@2x.png?v=1502479706"
          :srcsets="[]"
          alt="Vila stripe maxi shirt dress"
          :width="175"
          :height="47"
        >
          
        </SfImage>
      </div>
    </SfSection>

    <SfBanner
      title="Punto de Venta - Shopify POS"
      subtitle=""
      description="El Punto de Venta realiza una sincronización de tu inventario en tu tienda física y en línea; además posee un lector de tarjetas que te permite aceptar pagos físicos."
      buttonText="Detalle del producto"
      background="#edf2f6"
      image="/homepage/bannerA_1240x4003.png"
    />
  
  <SfSection
    titleHeading=""
    subtitleHeading=""
    :levelHeading="2"
  >
    <div></div>
  

    <SfBanner
      class="sf-banner--right"
      title="Entrenamiento eCommerce Sprint"
      subtitle=""
      description="- ¿Quieres adquirir nuevas capacidades para lograr un cambio significativo y poderoso para tu negocio? ¡eCommerce Sprint está aquí para ayudarte!"      
      buttonText="Contáctamos"
      background="#edf2f6"
      image="/homepage/bannerA_1240x4002.png"
    /> 
    </SfSection>   
    
  </div>
</template>
<script type="module">
import {
  SfHero,
  SfBanner,
  SfCallToAction,
  SfSection,
  SfCarousel,
  SfImage,
  SfBannerGrid,
  SfHeading,
  SfArrow,
  SfButton,
  SfCategoryCard
} from '@storefront-ui/vue';
import {
  useProduct,
  useCart,
  productGetters
} from '@vue-storefront/shopify';
import {
  computed,
  onBeforeMount
} from '@nuxtjs/composition-api';
import LazyHydrate from 'vue-lazy-hydration';
import MobileStoreBanner from '~/components/MobileStoreBanner.vue';
import RelatedProducts from '~/components/RelatedProducts.vue';

export default {
  name: 'Home',
  
  components: {
    SfHero,
    RelatedProducts,
    SfBanner,
    SfCallToAction,
    SfSection,
    SfCarousel,
    SfImage,
    SfBannerGrid,
    SfHeading,
    SfArrow,
    SfButton,
    MobileStoreBanner,
    LazyHydrate,
    SfCategoryCard
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  setup(contect) {
    const {
      products: relatedProducts,
      search: productsSearch,
      loading: productsLoading
    } = useProduct('relatedProducts');
    const { cart, addItem: addToCart, isInCart } = useCart();
    

    onBeforeMount(async () => {
      await productsSearch({ limit: 8 });
    });
    return {
      products: computed(() =>
        productGetters.getFiltered(relatedProducts.value, { master: true })
      ),
      getChkId: computed(() => cart.value.id),
      productsLoading,
      productGetters,
      addToCart,
      isInCart
    };
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      heroes: [
        {
          title: 'TENER TU TIENDA EN SHOPIFY NUNCA FUE TAN FÁCIL',
          subtitle: 'Nuestra meta es garantizar el éxito de tu empresa.',
          buttonText: 'Iniciar mi tienda',
          background: '#edf2f6',
          image: {
            mobile:
              'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerH_328x224.png',
            desktop:
              '/homepage/bannerH_1240x5843.png'
          },
          link: '/c/women/women-clothing-shirts'
        },
        
      ],
      banners: [
        {
          slot: 'banner-A',
          subtitle: 'Dresses',
          title: 'Cocktail & Party',
          description:
            'Find stunning women\'s cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.',
          buttonText: 'Shop now',
          image: {
            mobile:
              'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerB_328x343.jpg',
            desktop:
              'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerF_332x840.jpg'
          },
          class: 'sf-banner--slim desktop-only',
          link: '/c/women/women-clothing-skirts'
        },
        {
          slot: 'banner-B',
          subtitle: 'Dresses',
          title: 'Linen Dresses',
          description:
            'Find stunning women\'s cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses from all your favorite brands.',
          buttonText: 'Shop now',
          image: {
            mobile:
              'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerE_328x343.jpg',
            desktop:
              'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerE_496x840.jpg'
          },
          class: 'sf-banner--slim banner-central desktop-only',
          link: '/c/women/women-clothing-dresses'
        },
        {
          slot: 'banner-C',
          subtitle: 'T-Shirts',
          title: 'The Office Life',
          image: {
            mobile:
              'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerC_328x343.jpg',
            desktop:
              'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerC_332x400.jpg'
          },
          class: 'sf-banner--slim banner__tshirt',
          link: '/c/women/women-clothing-shirts'
        },
        {
          slot: 'banner-D',
          subtitle: 'Summer Sandals',
          title: 'Eco Sandals',
          image: {
            mobile:
              'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerG_328x343.jpg',
            desktop:
              'https://cdn.shopify.com/s/files/1/0407/1902/4288/files/bannerG_332x400.jpg'
          },
          class: 'sf-banner--slim',
          link: '/c/women/women-shoes-sandals'
        }
      ]
    };
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    toggleWishlist(index) {
      this.products[index].isInWishlist = !this.products[index].isInWishlist;
      console.log(products);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@storefront-ui/vue/styles";
#home {
  
  @include generate-color-variants(--_c-blue-primary, #cc9e4c);
  @include assign-color-variants(--c-primary, --_c-blue-primary);
  @include assign-color-variants(--c-primary-variant, --_c-blue-secondary);
  
  box-sizing: border-box;
  padding: 0 var(--spacer-sm);
  @include for-desktop {
    max-width: 1240px;
    padding: 0;
    margin: 0 auto;
  }
}
.hero {
  margin: var(--spacer-xl) auto var(--spacer-lg);
  --hero-item-background-position: center;
  @include for-desktop {
    margin: var(--spacer-xl) auto var(--spacer-2xl);
  }
  .sf-hero-item {
    &:nth-child(even) {
      --hero-item-background-position: left;
      @include for-mobile {
        --hero-item-background-position: 30%;
        ::v-deep .sf-hero-item__subtitle,
        ::v-deep .sf-hero-item__title {
          text-align: right;
          color: #cc9e4c;
          width: 100%;
          padding-left: var(--spacer-sm);
        }
      }
    }
  }
  ::v-deep .sf-hero__control {
    &--right,
    &--left {
      display: none;
    }
  }
}
.banner-grid {
  --banner-container-width: 50%;
  margin: var(--spacer-xl) 0;
  ::v-deep .sf-link:hover {
    color: var(--c-white);
  }
  @include for-desktop {
    margin: var(--spacer-2xl) 0;
    ::v-deep .sf-link {
      --button-width: auto;
      text-decoration: none;
    }
  }
}
.banner {
  &__tshirt {
    background-position: left;
  }
  &-central {
    @include for-desktop {
      --banner-container-flex: 0 0 70%;
    }
  }
}
.similar-products {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: var(--spacer-2xs);
  --heading-padding: 0;
  border-bottom: 1px var(--c-light) solid;
  @include for-desktop {
    border-bottom: 0;
    justify-content: center;
    padding-bottom: 0;
  }
}
.call-to-action {
  background-position: right;
  margin: var(--spacer-xs) 0;
  @include for-desktop {
    margin: var(--spacer-xl) 0 var(--spacer-2xl) 0;
  }
}
.carousel {
  margin: 0 calc(0 - var(--spacer-sm)) 0 0;
  @include for-desktop {
    margin: 0;
  }
  &__item {
    margin: 1.375rem 0 2.5rem 0;
    @include for-desktop {
      margin: var(--spacer-xl) 0 var(--spacer-xl) 0;
    }
    &__product {
      --product-card-add-button-transform: translate3d(0, 30%, 0);
    }
  }
  ::v-deep .sf-arrow--long .sf-arrow--right {
    --arrow-icon-transform: rotate(180deg);
    -webkit-transform-origin: center;
    transform-origin: center;
  }
  .sf-banner--right {
    --banner-title-color: #cc9e4c;
    --banner-color: #cc9e4c;
  }
}

</style>
