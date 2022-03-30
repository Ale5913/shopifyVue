<template>
<div >
  <h1>Nosotros</h1>
   <img src="https://cdn.shopify.com/s/files/1/1444/7826/files/equipo-terrabionic-ecommerce_1024x1024.png?v=1506968582">
<div class="body"> 
      <div class="text">
            <p class="justify-content">
             Somos nómadas digitales que compartimos una visión con nuestros socios y clientes: Ofrecer excelencia y calidad para garantizar el éxito y rentabilidad de las empresas del futuro.
              <br>
              <br>
              Construimos tu e-commerce auténtico, fácil de usar y atractivo para tu cliente, con un equipo de especialistas listos para ofrecerte resultados en el ecosistema digital..
              <br>
              <br>
              Construimos tu e-commerce auténtico, fácil de usar y atractivo para tu cliente, con un equipo de especialistas listos para ofrecerte resultados en el ecosistema digital..
              <br>
              <br>
              Somos consultores e-commerce por AMIPCI, Asociación Mexicana de Internet.
              <br>
              <br>
              Nuestros consultores cuentan con las herramientas adecuadas para entender tu proyecto como un todo de manera global y bien estructurado.
              <br>
              <br>
              Entendemos tu e-commerce desde el punto de vista financiero, económico, administrativo, logístico, mercadológico y tecnológico comunicativo.
            </p>
            </div>
            <img src="	https://cdn.shopify.com/s/files/1/1444/7826/files/diplomado-amipci_large.png?v=1505425811">
          </div>       
    <div class="none">

</div>

</div>
</template>

<script>
import {SfImage} from '@storefront-ui/vue';
import Newsletter from '~/components/Newsletter.vue';
import Suplex from '~/components/Suplex.vue';
import LazyHydrate from 'vue-lazy-hydration';
export default {
  name: 'Nosotros',
  transition: 'fade',
   components: {
    LazyHydrate,
    Newsletter,
    Suplex,
    SfImage
  },
  
  }
</script>
<style scoped>
.img
{
    margin-top: 10px;
    margin-bottom: -200px;
}
.none
{
      width: 100%;
      margin-left: 0%
}
.body
{
  text-align: center;
font-style:italic;
    justify-content: center;
    text-align: center;
    margin-bottom: 100px;
    width: 70%;
    margin-left: 15%;
}
</style>

