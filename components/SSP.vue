<template>
<html>
<div class="social-proof-sec">
    <div class="social-proof-list">
        <div class="social-proof-item">
            <div class="sf-characteristic color-secondary home-statistics sf-circle-icon ">
                <div class="image">
                    <SfImage
    src="https://image.flaticon.com/icons/png/512/599/599489.png"
    :srcsets="[]"
    alt="Five Star"
    width="40"
    height="40" />                
    </div>
                <div class="sf-characteristic__text">
                    <div class="sf-characteristic__title">3K+</div>
                    <div class="sf-characteristic__description">Reseñas Positivas</div>
                </div>
            </div>
        </div>
        <div class="social-proof-item">
            <div class="sf-characteristic color-secondary home-statistics sf-circle-icon ">
                <div class="image">
                    <SfImage
    src="https://image.flaticon.com/icons/png/512/1933/1933663.png"
    :srcsets="[]"
    alt="Happy Customers"
    width="40"
    height="40" />  
                        <!---->
                </div>
                <div class="sf-characteristic__text">
                    <div class="sf-characteristic__title">4 Mil +</div>
                    <div class="sf-characteristic__description">Clientes Contentos</div>
                </div>
            </div>
        </div>
        <div class="social-proof-item">
            <div class="sf-characteristic color-secondary home-statistics sf-circle-icon ">
                <div class="image">
                    <SfImage
    src="https://image.flaticon.com/icons/png/512/742/742750.png"
    :srcsets="[]"
    alt="Guarantee"
    width="40"
    height="40" />  
                    <!---->
                </div>
                <div class="sf-characteristic__text">
                    <div class="sf-characteristic__title">1 Año</div>
                    <div class="sf-characteristic__description">Garantia</div>
                </div>
            </div>
        </div>
        <div class="social-proof-item">
            <div class="sf-characteristic color-secondary home-statistics sf-circle-icon ">
                <div class="image">
                    <SfImage
    src="https://image.flaticon.com/icons/png/512/725/725118.png"
    :srcsets="[]"
    alt="Easy Returns"
    width="40"
    height="40" />  
                    <!---->
                </div>
                <div class="sf-characteristic__text">
                    <div class="sf-characteristic__title">1 a 3 Dias </div>
                    <div class="sf-characteristic__description">Entrega</div>
                </div>
            </div>
        </div>
    </div>
</div>

</html>
</template>
<script>
import {SfImage, SfButton, SfBadge } from '@storefront-ui/vue';
import {
  mapMobileObserver,
  unMapMobileObserver
} from '@storefront-ui/vue/src/utilities/mobile-observer.js';
export default {
  name: 'SSP',
  components: 
  {
SfImage
   },
  computed: {
    ...mapMobileObserver()
  },
  beforeDestroy() {
    unMapMobileObserver();
  }
};
</script>
<style scoped>

.social-proof-sec{
    padding-top:60px;
    padding-bottom:60px;
    background: linear-gradient(30deg,gray, white);
    
}

@media (max-width:1023px){
    .social-proof-sec{
        padding-top:30px;
        padding-bottom:30px;
        pointer-events:auto;
        }
    }
.social-proof-sec .social-proof-list{
        max-width:1062px;
        margin:0 auto;
        display:flex;
        flex-wrap:nowrap;
        justify-content:space-between;
    }
    @media (max-width:767px){
        .social-proof-sec .social-proof-list{
            flex-wrap:wrap;
            justify-content:flex-start;
            width: 100%;
            }
        }
        .social-proof-sec .sf-characteristic__text
        {
            padding-left:20px
        }
            @media (max-width:1023px){
                .social-proof-sec .sf-characteristic__text
                {
                    padding-left:15px;
                }
                                    }
            @media (max-width:767px){
                    .social-proof-sec .sf-characteristic__text{
                        padding-left:10px;}}
            @media (max-width:374px){
                .social-proof-sec .sf-characteristic__text{padding-left:15px;}
                }

                .social-proof-sec .sf-characteristic__text .sf-characteristic__description,.social-proof-sec .sf-characteristic__text
                .sf-characteristic__title
                {
                    font-family:var(--font-family--primary);
                    font-weight:400;
                    font-size:16px;
                    line-height:1.5;
                    color:var(--c-secondary);
                    white-space:nowrap;
                }

            @media (max-width:1023px){
                .social-proof-sec .sf-characteristic__text .sf-characteristic__description,.social-proof-sec .sf-characteristic__text .sf-characteristic__title
                {
                    font-size:14px
                }
                }
            @media (max-width:767px)
            {
            .social-proof-sec .sf-characteristic__text .sf-characteristic__description,.social-proof-sec .sf-characteristic__text .sf-characteristic__title
            {
                white-space:normal;
                font-size:12px
            }
            }
            @media (max-width:374px)
            {
                .social-proof-sec .sf-characteristic__text .sf-characteristic__description,.social-proof-sec .sf-characteristic__text .sf-characteristic__title
                {
                    font-size:13px
                    }
            }
                .social-proof-sec .sf-characteristic__text .sf-characteristic__title
                {
                    font-weight:600
                }
                .social-proof-sec .social-proof-item
                {
                    padding:0 2%;
                    width:auto;
                    position:relative;
                }
            @media (max-width:767px)
            {
                .social-proof-sec .social-proof-item
                {
                    flex:0 0 50%;
                    max-width:50%;
                    padding:0 10px
                }
                .social-proof-sec .social-proof-item:nth-child(odd)
                {
                    padding-left:0
                }
                .social-proof-sec .social-proof-item:nth-child(odd):after
                {
                    display:none
                }
                .social-proof-sec .social-proof-item:nth-child(2n)
                {
                    padding-right:0
                }
                .social-proof-sec .social-proof-item:nth-child(n+3)
                {
                    margin-top:20px
                }
                }
                @media (max-width:767px)
                {
                    .social-proof-sec .social-proof-item
                    {
                        flex:50%;
                        max-width:100%;
                        padding:0;
                        margin-top: 15px;
                        /* background-color: lightblue; */
                        
                    }
                    .social-proof-sec .social-proof-item:nth-child(n+3)
                    {
                        margin-top:0
                    }.social-proof-sec .social-proof-item:nth-child(n+2)
                    {
                        margin-top:15px
                    }
                    }
                    .social-proof-sec .social-proof-item:after
                    {
                        content:"";
                        width:1px;
                        height:84%;
                        background-color:var(--_c-gray-DDDDDD);
                        position:absolute;
                        left:0;
                        top:0;
                        bottom:0;
                        margin:auto
                    }
                    @media (max-width:374px)
                    {
                        .social-proof-sec .social-proof-item:after
                        {
                            display:none
                        }
                        }
                        .social-proof-sec .social-proof-item:first-child
                        {
                            padding-left:0
                        }
                        .social-proof-sec .social-proof-item:first-child:after
                        {
                            display:none
                        }
                        .social-proof-sec .social-proof-item:last-child
                        {
                            padding-right:0
                        }
                        @media (max-width:1023px)
                        {
                            .social-proof-sec .home-statistics
                            {
                                padding-left:0;
                                padding-right:0
                                }
                            }
                            .social-proof-sec .home-statistics .home-circle-icon
                            {
                                width:50px
                            }
                        @media (max-width:1023px){
                            .social-proof-sec .home-statistics .home-circle-icon {
                             flex:0 0 40px;
                             max-width:40px;
                             max-height:40px;
    }
}

</style>