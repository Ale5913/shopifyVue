<template>
  <div class="body">
    <!-- Begin Mailchimp Signup Form -->
    <link
      href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css"
      rel="stylesheet"
      type="text/css"
    />
    <style type="text/css"></style>
    <div id="mc_embed_signup">
      <form
        action="https://terrabionic.us5.list-manage.com/subscribe/post?u=b3949731243380225a916c85a&amp;id=428f894f8e"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <h2>Únase a la lista de Siette para ofertas exclusivas </h2>
          <h2>             y trucos para el cuidado de la piel </h2>
          <div class="indicates-required">
            <span class="asterisk">*</span> Campo obligatorio
          </div>
          <div class="mc-field-group">
            <label for="mce-EMAIL"
              >Correo Electronico <span class="asterisk">*</span>
            </label>
            <input
              type="email"
              value=""
              name="EMAIL"
              class="required email"
              id="mce-EMAIL"
            />
          </div>

          <p align="center">
            <input
              align="right"
              type="submit"
              value="Subscríbete"
              name="subscribe"
              id="mc-embedded-subscribe"
              data-cy="login-btn_submit"
              class="sf-button sf-button--primary form__button"
              
            />
          </p>
          <div id="mce-responses" class="clear">
            <div
              class="response"
              id="mce-error-response"
              style="display: none"
            ></div>
            <div
              class="response"
              id="mce-success-response"
              style="display: none"
            ></div>
          </div>
          <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
          <div style="position: absolute; left: -5000px" aria-hidden="true">
            <input
              type="text"
              name="b_b3949731243380225a916c85a_428f894f8e"
              tabindex="-1"
              value=""
            />
          </div>
          
        </div>
      </form>
    </div>
    <script
      type="text/javascript"
      src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
    ></script>
    <script type="text/javascript">
      (function ($) {
        window.fnames = new Array();
        window.ftypes = new Array();
        fnames[0] = "EMAIL";
        ftypes[0] = "email";
        /*
         * Translated default messages for the $ validation plugin.
         * Locale: ES
         */
        $.extend($.validator.messages, {
          required: "Este campo es obligatorio.",
          remote: "Por favor, rellena este campo.",
          email: "Por favor, escribe una dirección de correo válida",
          url: "Por favor, escribe una URL válida.",
          date: "Por favor, escribe una fecha válida.",
          dateISO: "Por favor, escribe una fecha (ISO) válida.",
          number: "Por favor, escribe un número entero válido.",
          digits: "Por favor, escribe sólo dígitos.",
          creditcard: "Por favor, escribe un número de tarjeta válido.",
          equalTo: "Por favor, escribe el mismo valor de nuevo.",
          accept: "Por favor, escribe un valor con una extensión aceptada.",
          maxlength: $.validator.format(
            "Por favor, no escribas más de {0} caracteres."
          ),
          minlength: $.validator.format(
            "Por favor, no escribas menos de {0} caracteres."
          ),
          rangelength: $.validator.format(
            "Por favor, escribe un valor entre {0} y {1} caracteres."
          ),
          range: $.validator.format(
            "Por favor, escribe un valor entre {0} y {1}."
          ),
          max: $.validator.format(
            "Por favor, escribe un valor menor o igual a {0}."
          ),
          min: $.validator.format(
            "Por favor, escribe un valor mayor o igual a {0}."
          ),
        });
      })(jQuery);
      var $mcj = jQuery.noConflict(true);
    </script>
    <!--End mc_embed_signup-->
  </div>
</template>

<script>


export default {
  name: "Newsletter",
  components: {},
  setup() {},
};
</script>

<style lang="scss" scoped>
.body
{
    background: linear-gradient(gray, white,black);
}
#mc_embed_signup {
  padding: -1em;
  background: linear-gradient(gray, white,black);
  display:flex;
  flex-direction: column;
  align-items: center;
  max-height: 20%;
  max-width: 50%;
   font-family: var(--font-family--primary);
   margin-bottom: -30px;
   margin-left: 25%;
   font-weight: bold;
   @include for-mobile
  {
   margin-left: 0%;
  max-height: 100%;
  max-width: 100%;
  font-size:9px;
  padding: 1em;
  
  }
   
}


            
</style>