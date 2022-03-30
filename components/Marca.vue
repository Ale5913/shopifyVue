<template>
  <div class="head">
      <div class="heading">
          <center>
          <div class="image">
          
          <SfImage v-if="isMobile" src="/siette2.png" alt="7" :width="200" :height="50"></SfImage>
          <SfImage v-else src="/siette2.png" alt="7" :width="350" :height="100"></SfImage>
        
        </div>
          <div class="text">
            <p class="justify-content">
              SIETTE es la marca de confianza N°1 para el cuidado de la piel en el hogar y
              soluciones de bienestar. 
              <br>
              te invitamos a que te unas a más de 1 millón de clientes
              que han transformado su piel de forma asequible utilizando nuestros productos de vanguardia
              en salud.
            </p>
          </div>
        </center>
      </div>

  </div>
</template>


<script>
import {SfImage} from '@storefront-ui/vue';
import {
  mapMobileObserver,
  unMapMobileObserver
} from '@storefront-ui/vue/src/utilities/mobile-observer.js';
export default {
  name: 'Marca',
  components: {
    SfImage
  },
   computed: {
    ...mapMobileObserver()
  },
  beforeDestroy() {
    unMapMobileObserver();
  }
}
</script>

<style lang="scss" scoped>
.image
{
    @include for-desktop {
    margin-top: -90px;
    margin-bottom: 50px;
    background: black;
    height: 100px;
    width: 350px;
    border: 1px solid;
    }
    @include for-mobile {
    margin-top: -30px;
    width: 200px;
    height: 50px;
    background: black;
    }
}

    
.text
{
    @include for-mobile 
{
    width: 100%;
}
    
    font-style:italic;
    justify-content: center;
    text-align: center;
    font-family: Messina Modern;
    margin-bottom: 100px;
    width: 70%;
    }
</style>