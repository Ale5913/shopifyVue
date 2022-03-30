<template>

  <SfTopBar class="topbar" >
    <template #left>
            &nbsp;
        <SfButton data-cy="top-bar-btn_faq" class="sf-button--text">{{ $t('Contact') }}</SfButton>
      </template>
     
    <template #center>
      
            &nbsp;
        <SfButton data-cy="top-bar-btn_more" class="topbar__button sf-button--text">{{ $t('Download') }}</SfButton>
              &nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;    
        <SfButton data-cy="top-bar-btn_more" class="topbar__button sf-button--text">{{ $t('tel') }}</SfButton>
      </template>
      <template #right>
        <p>{{ $t('Terrabionic') }}</p>

    </template>
  </SfTopBar>
</template>

<script>
import { SfButton, SfTopBar } from '@storefront-ui/vue';
import LocaleSelector from './LocaleSelector';

export default {
  components: {
    SfTopBar,
    SfButton,
    LocaleSelector
  }
};

</script>
<style lang="scss" scoped>
.topbar {
  border-top: solid  black;
  border-bottom: solid Black;
;
  color: gray;
  position: relative;
  z-index: 1;
  &__button {
    margin: 0 0 0 var(--spacer-xs);
  }
}
</style>
