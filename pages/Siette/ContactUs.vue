<template>
<div >
  <h1>Contactanos</h1>
<div class="body"> <div>
      <p>¿Preguntas? Estamos aquí para ayudar</p>
      <p>Nuestro servicio de atención al cliente está abierto de lunes a viernes de 9 a. M. A 5 p. M. PST, cerrado los días festivos..</p>
      <p>Póngase en contacto con nuestro equipo aquí abra un ticket de soporte :<br>
      <span><em><strong> Email: <a href="mailto: Contact@siette.com"> Contact@siette.com</a></strong></em></span></p>
      <p>* Asegúrese de revisar su carpeta de correo no deseado si no recibe una respuesta de inmediato.</p>
      <p>¡Gracias de nuevo y esperamos que disfrute de su compra!</p>
      <p><span>Nuestra dirección comercial es:</span><br>
      <span><em><strong>Presidente Masaryk 61-901 B Col. Polanco, Miguel Hidalgo CDMX </strong></em></span></p>
    </div></div>
  <div v-html="content.body"/>
  <LazyHydrate when-visible>
      <Newsletter />
    </LazyHydrate>
</div>
</template>

<script>
import { useContent } from '@vue-storefront/shopify';
import { onSSR } from '@vue-storefront/core';
import Newsletter from '~/components/Newsletter.vue';
import LazyHydrate from 'vue-lazy-hydration';
export default {
  name: 'ContactUs',
  transition: 'fade',
   components: {
    LazyHydrate,
    Newsletter
  },
  setup() {
    
    const {
      loading: contextsLoading,
      content,
      search
    } = useContent('pageContents');
    onSSR(async () => {
      await search({ slug: 'who-we-are', ContentType: 'page' });
    });
    return {
      content,
      contextsLoading
    };
  }
};
</script>
<style scoped>
.body
{
  text-align: center;
font-family: Messina Modern;
font-style:italic;
    justify-content: center;
    text-align: center;
    font-family: Messina Modern;
    margin-bottom: 100px;
    width: 70%;
    margin-left: 15%;
}
</style>

