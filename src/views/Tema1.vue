<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(style="background-color: #2EC49F;")
        span(style="color: white") 1
      h1 Estrategias de migración
    
    .container-bg-t1(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-1.svg')})`}"
      style="background-repeat: no-repeat; "
      ).mb-5
      .col-12.col-md-4
        img(src="@/assets/curso/temas/tema1/img-1.png")
      .col-12.col-md-7.mt-5
        .d-flex.ps-3.mb-5
          img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 41px")
          p.ps-3.fw-bold.mb-0(style="color: #1565C0") La migración de información a la nube, como se ha visto anteriormente, es un paso obligado para particulares y para empresas que se encuentren dotadas a nivel de infraestructura, con equipos de servidores, aplicaciones, redes, etc. Todo esto implica un largo, y a veces complejo proceso de migración. 
        .cajon.color-acento-botones.p-4.ms-3.edit-cajon
          p <b>Este proceso de migración</b>, consiste en una serie de actividades para lograr una identificación, planificación, ejecución y evaluación de migración de servicios de TI locales a servicios en la nube dentro de una organización.

    .containe-bg-2.mb-5(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-2.svg')})`}")
      .titulo-segundo.color-acento-contenido
        h2#t_1_1 1.1 Concepto
      
      .d-flex.flex-wrap.align-items-center.mb-5
        .col-12.col-md-8.me-auto.pe-0.pe-md-5
          p.mb-5 <b>Todo proyecto de implementación de servicios en la nube debe estar orientado o dirigido por una estrategia definida de migración</b> la cual varía según múltiples factores, por lo que no hay una única estrategia para una cartera de productos TI.
          .d-flex.ps-3.mb-5
            img(src="@/assets/curso/temas/tema1/decorador-2.svg" style="max-width: 41px")
            p.ps-3.fw-bold.mb-0(style="color: #1565C0") No obstante, una de las ventajas de la infraestructura <em>cloud</em> es permitir combinar servicios que consoliden las necesidades de la organización. En el <em>cloud computing</em> se suele utilizar la fórmula de ‘las 6 Rs’ para identificar distintas estrategias de migración a aplicar en función de las características del proyecto TI, como puede apreciarse en la figura que se encuentra a continuación.
        .col-12.col-md-4
          img(src="@/assets/curso/temas/tema1/img-2.png" style="max-width: 373px").mx-auto
    
      .titulo-sexto.color-acento-contenido.col-12.col-md-11.mx-auto
        h5 Figura 1.
        span Las 6 Rs de AWS para migración a la nube
      img(src="@/assets/curso/temas/tema1/img-3.svg").col-12.col-md-11.mx-auto.mb-5

      .bloque-texto-a.color-secundario.p-4.p-md-3.mb-5.edit-bloque-texto-1
        .row.m-0.align-items-center.justify-content-between
          .col-lg-2.mb-4.mb-lg-0
            img(src="@/assets/curso/temas/tema1/img-4.svg" style="max-width: 104px")
          .col-lg-10
            .bloque-texto-a__texto.px-3.py-4.fw-bold De forma simplificada, puede explicarse cada una de las estrategias que involucran la migración a la nube en la siguiente imagen.

      .col-12.col-md-8.col-lg-6.mx-auto.mb-5
        .titulo-sexto.color-acento-contenido.col-12.mx-auto
          h5 Figura 2.
          span Estrategias de migración
        img(src="@/assets/curso/temas/tema1/img-5.svg")

      .titulo-segundo.color-acento-contenido.mb-5
        h2#t_1_2 1.2 Tipos y características
    .container-bg-t1.pe-4.pb-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-3.svg')})`}"
      style="background-repeat: no-repeat; "
      )
      img(src="@/assets/curso/temas/tema1/img-6.png" style="max-width: 505px;").img-offset-1.mb-auto.col-12.col-md-5
      .col-12.col-md-7.position-relative.pt-4
        .container-texto-offset-1.mb-4
          p.mb-0 Como se estudió anteriormente, existe la técnica de las 6 Rs, que permite <span>la identificación de estrategias para la migración de información a la nube</span>. Estas estrategias corresponden con unos tipos y características particulares, de acuerdo con los costes que implica:
        .d-flex.flex-wrap
          .col-12.col-lg-6.col-xl-3.p-2
            .container-card
              img(src="@/assets/curso/temas/tema1/img-card-1.svg" style="max-width: 63px")
              p.w-100.fw-bold.mb-0 El traslado
          .col-12.col-lg-6.col-xl-3.p-2
            .container-card
              img(src="@/assets/curso/temas/tema1/img-card-2.svg" style="max-width: 63px")
              p.w-100.fw-bold.mb-0 Las necesidades de la organización
          .col-12.col-lg-6.col-xl-3.p-2
            .container-card
              img(src="@/assets/curso/temas/tema1/img-card-3.svg" style="max-width: 63px")
              p.w-100.fw-bold.mb-0 El tiempo permitido o posible para llevarlo a cabo
          .col-12.col-lg-6.col-xl-3.p-2
            .container-card
              img(src="@/assets/curso/temas/tema1/img-card-4.svg" style="max-width: 63px")
              p.w-100.fw-bold.mb-0 La misma estrategia de negocio
    .col-12.col-md-8.mb-5(style="background: linear-gradient(180deg, #039BE5, #027FBC); margin-top: -26px")
      p.mb-0.p-2.fw-bold(style="font-size: 18px; color: white;") En el siguiente recurso didáctico podremos ampliar la información sobre cada una de esas 6Rs: 

    .row.mb-5
      .col-12.col-md-7.mb-5.mb-md-0
        LineaTiempoD.color-acento-contenido.acordeon-t-1
          .container-acordeon-vertical(numero="1" titulo="<em>(R)ehosting</em>")
            p.mb-3 Refiere a la estrategia de <em>lift-and-shift</em>, en donde se trasladan las aplicaciones a la nube sin rediseño de ningún tipo (a veces de forma literal), podría decirse que como una copia <em>bit a bit</em>. 
            .d-flex.mb-4
              img(src="@/assets/curso/temas/tema1/decorador-3.svg" style="max-width: 44px").mx-4
              p.ps-3.fw-bold.mb-0(style="color: #1565C0") De esta forma no hay grandes beneficios a corto plazo, sin embargo, posibilita una migración relativamente rápida (hay automatizaciones al respecto), y se espera que un posible rediseño posterior sea más sencillo una vez las aplicaciones se encuentren ya en la nube.
            img(src="@/assets/curso/temas/tema1/img-acordeon-1.svg" style="max-width: 580px").px-2.mx-auto
          .container-acordeon-vertical(numero="2" titulo="<em>(R)eplatforming</em>")
            p.mb-3 Corresponde con el escenario <em>lift-tinker-and-shift</em>, es decir, el medio del artículo anterior, donde no se cambia de forma fundamental la arquitectura de la aplicación, pero se introduce alguna pequeña mejora.
            img(src="@/assets/curso/temas/tema1/img-acordeon-2.svg" style="max-width: 553px").px-2.mx-auto
          .container-acordeon-vertical(numero="3" titulo="<em>(R)epurchasing</em>")
            p Es una estrategia totalmente diferente, pues ya no se trata de migrar la aplicación existente, sino de adoptar una nueva aplicación que se encuentre en la nube. Por ejemplo, podríamos abandonar nuestro CRM legado y migrar hacia <em>Salesforce</em>. Si bien es cierto, no existe una migración de aplicación propiamente dicha, son necesarias las acciones como migrar datos, rediseñar interfaces, etc.
            img(src="@/assets/curso/temas/tema1/img-acordeon-3.svg" style="max-width: 514px").px-2.mx-auto
          .container-acordeon-vertical(numero="4" titulo="<em>(R)efactoring / (R)-arquitecting</em>")
            p.mb-3 Esta estrategia consiste en hacer un rediseño profundo de la aplicación que sea realmente cloud nativa. Se considera la llamada “reingeniería” (cambios profundos en la aplicación), como se indica, semejante al desarrollo de <em>cloud</em> nativo, que consiste en la construcción desde cero.
            img(src="@/assets/curso/temas/tema1/img-acordeon-4.svg" style="max-width: 514px").px-2.mx-auto
          .container-acordeon-vertical(numero="5" titulo="<em>(R)etire</em>")
            p Esta estrategia, realmente no se trata de una migración, sino más bien de aprovechar el esfuerzo y análisis de la realidad de sistemas disponibles para prescindir de alguno que realmente no aporte valor o que su funcionalidad permite ser absorbida por otro. Es idóneo para simplificar el mapa de sistemas, permitiendo ahorro en el costo, aporte en agilidad y mayor facilidad en la gestión.
            img(src="@/assets/curso/temas/tema1/img-acordeon-5.svg" style="max-width: 553px").px-2.mx-auto
          .container-acordeon-vertical(numero="6" titulo="<em>(R)etain</em>")
            p En realidad es una no migración, es decir, es una decisión consciente de no migrar una aplicación a la nube.
            img(src="@/assets/curso/temas/tema1/img-acordeon-6.svg" style="max-width: 553px").px-2.mx-auto
      .col-12.col-md-5
        img(src="@/assets/curso/temas/tema1/img-7.png")
    
    .d-flex.mb-5
      img(src="@/assets/curso/temas/tema1/decorador-4.svg" style="max-width: 44px").mx-4
      p.fw-bold.mb-0(style="color: #1565C0") Con el fin de llevar a cabo una mayor precisión del concepto, así como un breve resumen de las 6Rs, se presenta la siguiente tabla, la cual incorpora las características de cada una de estas, veamos:

    .col-12.px-4
      .titulo-sexto.color-acento-contenido
        h5 Tabla 1
        span <em>Estrategias de migración</em>
      .tabla-b.color-acento-contenido.mb-5
        .tabla-b__header(style="background: linear-gradient(180deg, rgba(46,196,159,1) 0%, rgba(43,57,144,1) 100%); border-top: 4px solid black; height: 13px; padding: 0")
        table
          tr
          tr
            th(style="font-size: 20px") Estrategia
            td.text-center.fw-bold(style="font-size: 20px") Definición
          tr
            th.fw-normal Re-hospedaje<br> <em>(“lift and shift”)</em>
            td Esta estrategia es una de las más comunes y sencilla de implementar, aunque también se considera que presenta muchas más probabilidades de generar problemas, incrementar los costes y alinear los <em>stakeholders</em> clave. El re-hospedaje, consiste en replicar un sistema existente en una infraestructura cloud. <br><br> Su implementación es rápida y práctica, pero hereda las debilidades y fallas de los sistemas originarios hacia la nube.
          tr
            th.fw-normal Re-Plataforma
            td Estrategia que implica análisis de negocio para identificación de procesos y servicios que puedan ser excluidos de la migración, requiere un conocimiento de la arquitectura originaria y procesos para la toma de decisiones.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.container-bg-t1
  display: flex
  flex-wrap: wrap
  margin-right: -3rem
@media (max-width: 768px)
  .container-bg-t1
    margin-right: 0
.edit-cajon
  background-color: #FFFAD8 !important
  &.cajon.color-acento-botones:before
    background-color: #EFD198
.containe-bg-2
  margin-top: -14rem
  padding-top: 15rem
  margin-left: -3rem
  margin-right: -3rem
  padding-right: 3rem
  padding-left: 3rem
  background-repeat: no-repeat
.edit-bloque-texto-1
  background-color: #F6F6F6 !important
  &::before
    background: linear-gradient(180deg, #039BE5, #027FBC)
    left: 40%
.img-offset-1
  margin-top: -2rem
.container-texto-offset-1
  background-color: white
  padding: 1rem 2.1rem
  width: 112%
  margin-left: -12%
  span
    font-weight: bold
    color: #1565C0
.container-card
  background-color: #FFFFFF
  box-shadow: 0 3px 6px #00000030
  border-radius: 10px
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-content: start
  text-align: center
  height: 100%
  p
    font-size: 15px
  img
    margin-top: 1rem
    margin-bottom: 1rem
.acordeon-t-1
  .linea-tiempo-d__item__number
    span
      color: black
</style>
