<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(style="background-color: #2EC49F;")
        span
          i.fas.fa-info(style="color: white")
      h1 Introducción

    .position-relative.mb-5
      img(src="@/assets/curso/img1.png").d-none.d-md-flex
      img(src="@/assets/curso/img1-movil.png").d-flex.d-md-none
      .container-text-introduccion.col-11.mx-auto
        p.mb-0 Le damos la bienvenida al componente formativo “Diseño y documentación de propuesta para servicios en la nube”. Para comenzar el recorrido por el mismo, visite el recurso didáctico que se muestra a continuación:
    
    figure.mb-5.video1
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.container-text-introduccion
  position: relative
  top: -50px
  padding: 2rem
  background: linear-gradient(0deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 35%, rgba(222,222,222,1) 100%)
  border-radius: 10px
</style>
