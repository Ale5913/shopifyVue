
<template>
  <div>
  <div class="ImagenCarru">  
      <SfCarousel>
    <SfCarouselItem>
      <div class="tarjeta">
        <!-- 1 -->
        <SfImage src="/Insta/prueba 1.jpg" alt="Insta" :width="270" :height="300"></SfImage>
      </div>
    </SfCarouselItem>
    &nbsp;
    <SfCarouselItem>
      <div class="tarjeta">
        <!-- 2 -->
        <SfImage src="/Insta/prueba 1.jpg" alt="Insta" :width="270" :height="300"></SfImage>
      </div>
    </SfCarouselItem>
    <SfCarouselItem>
      <div class="tarjeta">
        <!-- 3 -->
        <SfImage src="/Insta/prueba 10.jpg" alt="Insta" :width="270" :height="300"></SfImage>
      </div>
    </SfCarouselItem>
    <SfCarouselItem>
      <div class="tarjeta">
        <!-- 4 -->
        <SfImage src="/Insta/prueba 4.jpg" alt="Insta" :width="270" :height="300"></SfImage>
      </div>
    </SfCarouselItem>
    <SfCarouselItem>
      <div class="tarjeta">
        <!-- 5 -->
        <SfImage src="/Insta/prueba 1.jpg" alt="Insta" :width="270" :height="300"></SfImage>
      </div>
    </SfCarouselItem>
    <SfCarouselItem>
      <div class="tarjeta">
        <!-- 6 -->
        <SfImage src="/Insta/prueba 6.jpg" alt="Insta" :width="270" :height="300"></SfImage>
      </div>
    </SfCarouselItem>
  </SfCarousel>
  
  </div>
  </div>
</template>
<script>
import {SfCarousel} from '@storefront-ui/vue';
import {SfCarouselItem} from '@storefront-ui/vue';
import {SfImage} from '@storefront-ui/vue';
export default ({
    name: 'Carru',
  components: {
    SfCarouselItem,
    SfCarousel,
    SfImage
  },
})
</script>

<style lang="scss"  scoped>
.ImagenCarru
{
    margin-top: 10px;
    margin-bottom: 10px;
}
.tarjeta
{
      
      align-items: center; 
      justify-content: center; 
      height: 300px; 
      width: 270;
      color: #FFF; 
      font-size: 2.5rem

}
.image
{
    margin-top: 20px;
    
}


</style>