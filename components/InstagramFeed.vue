<template>
  <SfSection title-heading="Siette un sueño para tu belleza" subtitle-heading="#YOURLOOKSIETTE" class="title">
    <div class="grid grid-images">
      <div class="grid__row">
        <div class="grid__col">
          <a href="/c/galletas">
          <SfImage v-if="isMobile" src="images/beauty.png" alt="Beauty" :width="170" :height="170">Beauty</SfImage>
          <SfImage v-else  src="images/beauty.png"  alt="Beauty" :width="470" :height="470" >Beauty</SfImage>
          </a>
        </div>
        <div class="grid__col small">
          <a href="/c/suplementos-alimenticios">
          <SfImage v-if="isMobile" src="images/Sport.png" alt="Sport" :width="170" :height="170">Sport</SfImage>
          <SfImage v-else  src="images/Sport.png" alt="Sport" :width="470" :height="160">Sport</SfImage>
          </a>
        </div>
      </div>
      <div class="grid__row">
        <div class="grid__col small">
          <a href="/c/healthy">
          <SfImage v-if="isMobile" src="images/Healthy.png" alt="Healthy" :width="170" :height="170">Healthy</SfImage>
           <SfImage v-else src="images/Healthy.png" alt="Healthy" :width="470" :height="160">Healthy</SfImage>
           </a>
        </div>
        <div class="grid__col">
          <a href="/c/porcino">
          <SfImage v-if="isMobile" src="images/Porcino.png" alt="Porcino" :width="170" :height="170">Porcino</SfImage>
          <SfImage v-else src="images/Porcino.png" alt="Porcino" :width="470" :height="470">Porcino</SfImage>
          </a>
        </div>
      </div>
    </div>
  
    <div class="grid grid-images">
      <div class="grid__row">
        <div class="grid__col">
          <a href="/c/bovino">
          <SfImage v-if="isMobile" src="images/bovino.png" alt="katherina_trn" :width="170" :height="170">Bovino 1</SfImage>
          <SfImage v-else  src="images/bovino.png"  alt="Bovino" :width="470" :height="470" >Bovino</SfImage>
          </a>
        </div> 
      </div>
      <div class="grid__row">
        <div class="grid__col">
          <a href="/c/libre-pastoreo">
          <SfImage v-if="isMobile" src="images/pastoreo.png" alt="Libre Pastoreo" :width="170" :height="170">Libre Pastoreo 2</SfImage>
          <SfImage v-else src="images/pastoreo.png" alt="Libre Pastoreo" :width="470" :height="470">Libre Pastoreo</SfImage>
          </a>
        </div>
      </div>
    </div>
  </SfSection>
</template>
<script>
import {
  SfSection,
  SfImage,
  SfLink
} from '@storefront-ui/vue';
import {
  mapMobileObserver,
  unMapMobileObserver
} from '@storefront-ui/vue/src/utilities/mobile-observer.js';
export default {
  name: 'InstagramFeed',
  components: {
    SfSection,
    SfImage,
    SfLink
  },
  computed: {
    ...mapMobileObserver()
  },
  beforeDestroy() {
    unMapMobileObserver();
  }
};
</script>
<style lang="scss" scoped>
.title {
  --heading-title-font-weight: var(--font-weight--semibold);
  --section-margin: var(--spacer-xl) 0;
  --section-content-margin: var(--spacer-xl) 0;
  --heading-title-font-size: var(--h2-font-size);
  @include for-desktop {
    --section-margin: var(--spacer-2xl) 0;
    --section-content-margin: var(--spacer-2xl) 0;
  }
}
.grid {
  display: flex;
  max-height: 20.625rem;
  width: 100%;
  justify-content: center;
  margin: 0;
  
  @include for-desktop {
    max-height: 40.625rem;
    max-width: 60rem;
    margin: 0 auto;
    margin-top: 15px;
  }
  &__row {
    display: flex;
    flex-direction: column;
    & + & {
      margin-left: var(--spacer-xs);
      @include for-desktop {
        margin-left: var(--spacer-sm);
      }
    }
  }
  &__col {
    width: 10rem;
    height: 10rem;
    @include for-desktop {
      &.small {
        height: 10rem;
      }
     width: 29.375rem;
     height: 29.375rem;
    }
    & + & {
      margin-top: var(--spacer-xs);
      @include for-desktop {
        margin-top: var(--spacer-sm);
      }
    }
  }
}

</style>
