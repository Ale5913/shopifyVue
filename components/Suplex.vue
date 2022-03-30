<template>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
    
</head>
<body>

    <div class="container__cards">

        <div class="card">
            <div class="cover">
                <img src="images/p1.png" alt="">
                <div class="img__back"></div>
            </div>
            <div class="description">
                <h3>Laura Ochoa</h3>
                <p>Co fundadora de Siette.</p>
             
            </div>
        </div>

        <div class="card">
            <div class="cover">
                <img src="images/p2.png" alt="">
                <div class="img__back"></div>
            </div>
            <div class="description">
                <h3>Omar Fonseca</h3>
                <p>CEO y Fundador de Siette.</p>
             
            </div>
        </div>

        <div class="card">
            <div class="cover">
                <img src="images/p3.png" alt="">
                <div class="img__back"></div>
            </div>
            <div class="description">
                <h3>Nancy Wheeler</h3>
                <p>Coo-Chief Operations</p>
               
            </div>
        </div>

    </div>
    
</body>
</html>
</template>
<script>
import {
  mapMobileObserver,
  unMapMobileObserver
} from '@storefront-ui/vue/src/utilities/mobile-observer.js';
export default {
  name: 'Suplex',
  components: 
  {

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
.body
{
  background: white;
}

.container__cards{
    max-width: 1200px;
    margin: auto;
    margin-top: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.card{
    width: 300px;
    margin: 10px;
    transition: all 300ms;
}

.card:hover{
    width: 350px;
}

.card .cover{
    width: 100%;
    height: 250px;
    position: relative;
    overflow: hidden;
}

.card .cover img{
    width: 250px;
    display: block;
    margin: auto;
    position: relative;
    top: 40px;
    z-index: 1;
    filter: drop-shadow(5px 5px 4px rgba(0,0,0,0.5));
    transition: all 400ms;
}

.card:hover .cover img{
    top: 0px;
    filter: none;
}

.card .img__back{
    width: 100%;
    height: 200px;
    position: absolute;
    bottom: -80px;
    left: 0;
    background-size: cover;
    border-radius: 20px;
    transition: all 300ms;
}

.card:nth-of-type(1) .img__back{
    background-image: url(../static/images/bg1.jpg);
}

.card:nth-of-type(2) .img__back{
    background-image: url(../static/images/bg2.jpg);
}

.card:nth-of-type(3) .img__back{
    background-image: url(../static/images/bg3.jpg);
}

.card:hover .img__back{
    bottom: -40px;
}
.card .description{
    background: white;
    margin-top: -10px;
    padding: 20px;
    border-radius: 0px 0px 20px 20px;
    transition: all 300ms;
}

.card:hover .description{
    padding: 40px;
}

.card .description h2{
    margin-top: 10px;
}

.card .description p{
    margin-top: 10px;
}

.card .description input{
    padding: 10px 40px;
    margin-top: 20px;
    border: none;
    background: #A6359D;
    color: white;
    font-size: 14px;
    cursor: pointer;
    border-radius: 8px;
    transition: all 300ms;
}

.card .description input:hover{
    background: #83277b;
}
</style>