<template>
<div>
  <SfFooter :column="4" multiple class="footer">
    <SfFooterColumn :title="$t('About us')">
     
      <SfList>
        <SfListItem>
          <SfMenuItem label="Nosotros"  link='/Nosotros' />
          <SfMenuItem label="Contacto"  link="https://store.terrabionic.mx/pages/contacto" />
        </SfListItem>
      </SfList>
    </SfFooterColumn>
   
    <SfFooterColumn :title="$t('servicios')">
      <SfList>
        <SfListItem>
          <SfMenuItem label="Paquetes e-commerce"  link='/Siette/AboutUs' />
          <SfMenuItem label="Shopify POS"  link='/Siette/AboutUs' />
          <SfMenuItem label="Tareas"  link='/Siette/AboutUs' />
          <SfMenuItem label="Cursos"  link='/Siette/AboutUs'  />
          <SfMenuItem label="Marketing"  link='/Siette/AboutUs'  />
          <SfMenuItem label="Logistica"  link='/Siette/AboutUs'  />
          <SfMenuItem label="Multimedia"  link='/Siette/AboutUs'  />
          <SfMenuItem label="Amazon"  link='/Siette/AboutUs'  />
        </SfListItem>
      </SfList>
    </SfFooterColumn>
    
      <SfFooterColumn :title="$t('Help')">
      <SfList>
        <SfListItem>
          <SfMenuItem label="Aviso de privacidad"  link='/Siette/ContactUs'/>
          <SfMenuItem label="Terminos y condiciones"  link='/Siette/Garantia'/>
          <SfMenuItem label="Politicas de devoluciones"  link='/Siette/Garantia'/>
          <SfMenuItem label="Terminos de servicio"  link='/Siette/Garantia'/>
          <SfMenuItem label="Blog"  link='/Siette/Garantia'/>

        </SfListItem>
      </SfList>
    </SfFooterColumn>
    
      <SfFooterColumn :title="$t('Contacto')">
      <SfList>
        <SfListItem>   
          <SfMenuItem label="5578215341"  />
          <SfMenuItem label="01 (551) 2 09 20 88"  />
          <SfMenuItem label="shopify.terrabionic"  />
          <SfMenuItem label="contacto@terrabionic.com.mx"  />

          <SfMenuItem label="Presidente Masaryk 61-901 B Col. Polanco, Miguel Hidalgo CDMX"  />

        </SfListItem>
      </SfList>
    </SfFooterColumn>
    <SfFooterColumn title="Social">
      <div class="footer__socials">
        <a href="https://www.facebook.com/">
        <SfImage class="footer__social-image" src="/icons/facebook.svg" alt="FB" width="32" height="32" />
        </a>
      </div>
    </SfFooterColumn>
    <div class="pie2">
@ 2021 Terrabionic. All rights reserved.
    </div>
  </SfFooter>
  <div class="pie">
      @ 2021 Terrabionic. All rights reserved.</div>
  </div>
</template>

<script>
import { SfFooter, SfList, SfImage, SfMenuItem, SfLink } from '@storefront-ui/vue';

export default {
  components: {
    SfFooter,
    SfList,
    SfImage,
    SfMenuItem,
    SfLink
  },
  data() {
    return {
      isMobile: false,
      desktopMin: 1024,      
    };
  }
};
</script>

<style lang="scss">
.pie2
{
  
 @include for-mobile
 {
background:transparent;  
  color: white;
  font-weight: bold;
  text-align: right;

 }
 @include for-desktop 
 {
   display: none;
 }
}
.pie
{
  @include for-desktop {
  background:linear-gradient(30deg,white,black);  
  color: white;
  font-weight: bold;
  text-align: right;
  align-content: right;
 border-bottom: solid black;

  }
  }

.footer {
  border-top: solid  black;
  border-bottom: solid black;
  margin-bottom: 3.75rem;
  @include for-desktop {
    margin-bottom: 0;
  }
  &__socials {
    display: flex;
    justify-content: space-between;
    margin: 0 auto var(--spacer-lg);
    padding: var(--spacer-base) var(--spacer-xl);
    
    @include for-desktop {
      justify-content: flex-start;
      padding: var(--spacer-xs) 0;
      margin: 0 auto;
      margin-bottom:-50px;
    }
  }
  &__social-image {
    margin: 0 var(--spacer-2xs) 0 0;
  }
}
.sf-footer {
  @include for-desktop {
    border-top: var(--spacer-xs) solid var(--c-primary);
    padding-bottom: 0;
    margin-top: var(--spacer-2xl);
  }
  &__container {
    margin: var(--spacer-sm);
    @include for-desktop {
      max-width: 69rem;
      margin: 0 auto;
    }
  }
}
</style>
