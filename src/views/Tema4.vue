<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Comunicación

    .d-flex.flex-wrap.align-items-center.px-4.px-md-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: center; margin-left: -3rem; margin-right: -3rem;"
    )
      .d-flex.flex-wrap.col-12.col-md-7.order-2.order-md-1
        p.px-4.px-md-0 <span style="color: #2EC49F; font-weight: bold;">La comunicación es un elemento muy importante dentro de los proyectos de TI</span>, y para los proyectos de servicios en la nube no es la excepción. La comunicación toma relevancia en el momento de saber redactar y sustentar los proyectos de gestión de servicios en la nube, aplicando algunos tipos de comunicación, especialmente la comunicación verbal. Según la forma en que se conciba e implante, facilitará o no, para que se convierta en una variable estratégica de la organización.
        .d-flex.flx-wrap.flex-md-nowrap.px-4.px-md-0
          img(src="@/assets/curso/temas/tema4/decorador-1.svg" style="max-width: 43px").ms-0.me-3.mx-md-3
          p.mb-0(style="color: #1565C0; font-weight: bold;") Debe establecer unas metas que permitan una interacción comunicativa perfecta entre los participantes, además de demostrar voluntad y decisión de tomar acciones que sean perseverantes y que además aporte estabilidad. Así mismo aportar información útil, con el fin de lograr receptividad, identificación de objetivos y desafíos, teniendo presente cómo recibe ese mensaje, claridad y entendimiento.
      .col-12.col-md-5.order-1.order-md-2.px-4.px-md-0
        img(src="@/assets/curso/temas/tema4/img-1.png" style="max-width: 459px").mx-auto.mb-4.mb-md-0
    h3.titulo-tercero.mb-5.mt-5.mt-md-0 <span style="background-color: black; color: white; padding: .5rem 1rem;">Tipos</span>

    p.mb-5 Los tipos de comunicación corresponden a las diferentes formas que se tiene al transmitir un mensaje. Y tienen que ver con los diferentes modos de llevar a cabo la relación mediada por un mensaje, los diferentes ámbitos o situaciones, entre otro tipo de parámetros, etc. A nivel general pueden clasificarse los siguientes tipos de comunicación:

    .d-flex.flex-wrap.mb-5(style="position: relative; z-index: 1;")
      .col-12.col-md-6.d-flex.pe-0.pe-md-2.mb-4.mb-md-0
        .container-box-2-4
          img(src="@/assets/curso/temas/tema4/img-2.svg" style="max-width: 163px").mb-5
          p Consiste en la comunicación por medio del uso de las palabras entre los individuos que se comunican. Se puede tener una comunicación verbal de manera oral o escrita. En la actualidad, es muy común ver este tipo de comunicación a través de los medios digitales.
          img(src="@/assets/curso/temas/tema2/decorador-1.svg" style="max-width: 86px").ms-auto
      .col-12.col-md-6.d-flex.ps-0.ps-md-2
        .container-box-2-4.h-100
          div
            img(src="@/assets/curso/temas/tema4/img-3.svg" style="max-width: 200px").mb-5
            p Es el tipo de comunicación que se realiza sin hacer uso de las palabras, por ejemplo, por medio de los gestos, expresiones faciales, movimientos del cuerpo y las extremidades. En esta intervienen las emociones, y los estado de ánimo.
          img(src="@/assets/curso/temas/tema2/decorador-1.svg" style="max-width: 86px").ms-auto

    .container-bg-doble.flex-wrap.flex-md-nowrap.mb-5
      img(src="@/assets/curso/temas/tema3/img-3.svg" style="max-width: 104px; position: relative; z-index: 1;").me-4.mb-4.mb-md-0
      .container-p
        p.mb-0 También, se pueden tener tipos de comunicación según la cantidad de los participantes, teniendo así la comunicación individual, colectiva, interpersonal, grupal, masiva, entre otras.

    .container-bg-t1.pb-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/bg-2.svg')})`}"
      style="background-repeat: no-repeat; background-position: center;"
      )
      img(src="@/assets/curso/temas/tema4/img-4.png" style="max-width: 505px;").img-offset-1.mb-auto.col-12.col-md-5
      .col-12.col-md-7.position-relative.pt-4
        h3.titulo-tercero.ms-3.mb-4.mt-3 <span style="background-color: black; color: white; padding: .5rem 1rem;">Caracteristicas</span>
        .container-texto-offset-1.mb-4
          p.mb-0 A continuación, se describen las principales características de la comunicación enfocadas a la gestión de diseño y documentación de propuesta para servicios en la nube.
        .d-flex.flex-wrap
          .col-12.col-xl-4.p-2
            .container-card
              img(src="@/assets/curso/temas/tema4/img-card-1.svg" style="max-width: 67px")
              p.w-100.fw-bold.mb-0(style="line-height: 1") Técnicas de <br> comunicación oral
          .col-12.col-xl-4.p-2
            .container-card
              img(src="@/assets/curso/temas/tema4/img-card-1.svg" style="max-width: 67px")
              p.w-100.fw-bold.mb-0(style="line-height: 1") Técnicas de <br> comunicación escrita
          .col-12.col-xl-4.p-2
            .container-card
              img(src="@/assets/curso/temas/tema4/img-card-1.svg" style="max-width: 67px")
              p.w-100.fw-bold.mb-0(style="line-height: 1") Técnicas de manejo <br> de la información

    img(src="@/assets/curso/temas/tema4/bg-3.svg" style="position: absolute; margin-left: -3rem; margin-right: -3rem;")
    .col-12.col-xl-4(style="position: relative; z-index: 1; background: linear-gradient(180deg, #039BE5, #027FBC); margin-top: -26px; margin-top: 2rem; margin-bottom: 1.5rem")
      p.mb-0.p-2.fw-bold(style="font-size: 22px; color: white;") Técnicas de comunicación oral
    
    p.mb-3.position-relative Consisten en la preparación teórica y práctica para el desenvolvimiento oral sobre un tema en específico, por ejemplo, la exposición de una idea o proyecto. 
    p.mb-4.position-relative Las técnicas que se pueden utilizar para la comunicación oral son:
    img(src="@/assets/curso/temas/tema4/img-5.svg").col-12.col-md-10.mx-auto.pt-2.mb-5.position-relative

    .d-flex.flex-wrap.align-items-center.px-4.px-md-5.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/bg-4.svg')})`}"
      style="background-repeat: no-repeat; background-position: center; margin-left: -3rem; margin-right: -3rem"
    )
      img(src="@/assets/curso/temas/tema4/img-6.png").col-12.col-md-4
      .col-12.col-md-8
        .col-12.col-xl-6(style="position: relative; z-index: 1; background: linear-gradient(180deg, #039BE5, #027FBC); margin-top: -26px; margin-top: 2rem; margin-bottom: 1.5rem")
          p.mb-0.p-2.fw-bold(style="font-size: 22px; color: white;") Técnicas de comunicación escrita
        p Consisten en la preparación teórica y práctica para el desarrollo de la comunicación escrita sobre un tema en específico, por ejemplo, la redacción de informes o propuestas.
        .d-flex
          img(src="@/assets/curso/temas/tema4/decorador-2.svg" style="max-width: 44px").me-4
          p.mb-0(style="color: #1565C0; font-weight: bold") Las técnicas que se pueden utilizar para la comunicación escrita son:
        img(src="@/assets/curso/temas/tema4/decorador-3.svg" style="max-width: 86px").ms-auto

    .d-flex.flex-wrap.mb-5
      .col-12.col-md-6.px-0.px-md-4.mb-4
        .d-flex.position-relative.align-items-center(style="box-shadow: 0 3px 6px #00000030; background-color: white; min-height: 77px; border-radius: 10px; padding-left: 5.5rem")
          img(src="@/assets/curso/temas/tema4/icon-1.svg" style="max-width: 87px; position: absolute; left: -1rem")
          p.mb-0.fw-bold Planificación y organización de contenidos
      .col-12.col-md-6.px-0.px-md-4.mb-4
        .d-flex.position-relative.align-items-center(style="box-shadow: 0 3px 6px #00000030; background-color: white; min-height: 77px; border-radius: 10px; padding-left: 5.5rem")
          img(src="@/assets/curso/temas/tema4/icon-2.svg" style="max-width: 87px; position: absolute; left: -1rem")
          p.mb-0.fw-bold Organización del texto, en orden coherente
      .col-12.col-md-6.px-0.px-md-4.mb-4
        .d-flex.position-relative.align-items-center(style="box-shadow: 0 3px 6px #00000030; background-color: white; min-height: 77px; border-radius: 10px; padding-left: 5.5rem")
          img(src="@/assets/curso/temas/tema4/icon-3.svg" style="max-width: 87px; position: absolute; left: -1rem")
          p.mb-0.fw-bold Uso de lenguaje adecuado al tema abordado
      .col-12.col-md-6.px-0.px-md-4.mb-4
        .d-flex.position-relative.align-items-center(style="box-shadow: 0 3px 6px #00000030; background-color: white; min-height: 77px; border-radius: 10px; padding-left: 5.5rem")
          img(src="@/assets/curso/temas/tema4/icon-4.svg" style="max-width: 87px; position: absolute; left: -1rem")
          p.mb-0.fw-bold Correcta argumentación y coherencia con el escrito
      .col-12.col-md-6.px-0.px-md-4.mb-4
        .d-flex.position-relative.align-items-center(style="box-shadow: 0 3px 6px #00000030; background-color: white; min-height: 77px; border-radius: 10px; padding-left: 5.5rem")
          img(src="@/assets/curso/temas/tema4/icon-5.svg" style="max-width: 87px; position: absolute; left: -1rem")
          p.mb-0.fw-bold Óptima ortografía y semántica
      .col-12.col-md-6.px-0.px-md-4.mb-4
        .d-flex.position-relative.align-items-center(style="box-shadow: 0 3px 6px #00000030; background-color: white; min-height: 77px; border-radius: 10px; padding-left: 5.5rem")
          img(src="@/assets/curso/temas/tema4/icon-6.svg" style="max-width: 87px; position: absolute; left: -1rem")
          p.mb-0.fw-bold Uso adecuado de palabras, de acuerdo a su significado

    .col-12.col-md-6.col-lg-5.col-xl-5(style="position: relative; z-index: 1; background: linear-gradient(180deg, #039BE5, #027FBC); margin-top: -26px; margin-top: 2rem; margin-bottom: 1.5rem")
          p.mb-0.p-2.fw-bold(style="font-size: 22px; color: white;") Técnicas de manejo de la información

    .d-flex.flex-wrap
      .col-12.col-md-7.order-2.order-md-1
        p Consiste en las buenas prácticas para el adecuado manejo de la información dentro de una organización, en el desarrollo de una actividad, proceso o de un proyecto. 
        .d-flex.mb-5
          img(src="@/assets/curso/temas/tema4/decorador-4.svg" style="max-width: 40px").mx-3.mx-md-4
          p.mb-0(style="color: #1565C0; font-weight: bold") Existen diversas técnicas para un adecuado manejo de información, a continuación, se listan algunas en relación a la gestión de servicios en la nube.
        LineaTiempoD.color-acento-contenido.acordeon-t-4
          div(numero="1" titulo="Clasificación")
            p(style="color: #1565C0; font-weight: bold") Corresponde a un objetivo de la norma ISO 27001.
            p Asegurar que la información recibe un nivel apropiado de protección, de acuerdo con su importancia para la organización.
              br
              br
              | Y también es un control, pues una empresa establece más niveles de clasificación a medida que la misma sea de mayor tamaño y presente una mayor complejidad.
            .cajon.color-primario.p-4.mb-4.edit-cajon-4
              p.mb-0 Las empresas de tamaño medio, pueden establecer estos niveles para clasificar la información según el carácter confidencial de la misma:
            .d-flex.mb-2
              img(src="@/assets/curso/temas/tema4/decorador-5.svg" style="max-width: 10px").me-2
              p.mb-0 <span style="color: #1565C0; font-weight: bold">Confidencial:</span> cuando el nivel de confidencialidad de la información se incremente.
            .d-flex.mb-2
              img(src="@/assets/curso/temas/tema4/decorador-5.svg" style="max-width: 10px").me-2
              p.mb-0 <span style="color: #1565C0; font-weight: bold">Restringido:</span> para niveles medios de confidencialidad.
            .d-flex.mb-2
              img(src="@/assets/curso/temas/tema4/decorador-5.svg" style="max-width: 10px").me-2
              p.mb-0 <span style="color: #1565C0; font-weight: bold">Uso interno:</span> información con un nivel bajo de confidencialidad.
            .d-flex.mb-2
              img(src="@/assets/curso/temas/tema4/decorador-5.svg" style="max-width: 10px").me-2
              p.mb-0 <span style="color: #1565C0; font-weight: bold">Público:</span> cuando todas las personas pueden ver la información.
          div(numero="2" titulo="Etiquetado")
            p(style="color: #1565C0; font-weight: bold") Corresponde a un control del Anexo A del estándar ISO/IEC 27001:2013.
            p Se debería desarrollar e implementar un conjunto adecuado de procedimientos para el etiquetado de la información, de acuerdo con el esquema de clasificación de información adoptado por la organización.
          div(numero="3" titulo="Documentación ordenada")
            p Documentación ordenada según los tipos. Corresponde a los documentos de procesos o procedimiento, manuales, instructivos, formatos, registros, actas.
          div(numero="4" titulo="Confidencialidad, Integridad y disponibilidad")
            p(style="color: #1565C0; font-weight: bold") Corresponde a un objetivo de la norma ISO/IEC 27001:2013. 
            p Asegurar el uso apropiado y eficaz de la criptografía para proteger la confidencialidad, la autenticidad y/o la integridad de la información. 
          div(numero="5" titulo="Almacenado y respaldo")
            p(style="color: #1565C0; font-weight: bold") Responde a la seguridad ofrecida al cliente en cuanto a la seguridad que se tiene de los datos y la información que maneja y guarda el proveedor de servicios en la nube.
          div(numero="6" titulo="Seguridad, Control de Acceso y Cifrado")
            p(style="color: #1565C0; font-weight: bold") Para controlar el acceso al sistema, debe mantener la seguridad física del entorno informático. Por ejemplo, un sistema cuya sesión está iniciada pero desatendida es vulnerable al acceso no autorizado. Un intruso puede obtener acceso al sistema operativo y a la red. 
            p El entorno y el <em>hardware</em> del equipo deben estar físicamente protegidos contra el acceso no autorizado.
      .col-12.col-md-5.order-1.order-md-2.mb-4
        img(src="@/assets/curso/temas/tema4/img-7.png" style="max-width: 472px").mx-auto

</template>

<script>
export default {
  name: 'Tema3',
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
.container-box-2-4
  background: linear-gradient(-15deg, #2EC49F, #2B3990)
  padding: 2rem
  border-radius: 10px
  display: flex
  flex-wrap: wrap
  align-content: space-between
  p
    color: white
.container-bg-doble
  display: flex
  align-items: center
  position: relative
  background-color: #F6F6F6
  padding: 2rem
  overflow: hidden
  &::after
    content: ''
    position: absolute
    height: 100%
    width: 70%
    left: 30%
    background: #F59D36
    @media (max-width: 768px)
      height: 200%
      width: 200%
      left: 50%
      top: 50%
      transform: rotate(38deg) translateX(-28%)
  .container-p
    position: relative
    z-index: 1
    background-color: white
    height: 100%
    padding: 1.5rem 2rem
.container-bg-t1
  display: flex
  flex-wrap: wrap
  margin-right: -3rem
@media (max-width: 768px)
  .container-bg-t1
    margin-right: 0
.container-card
  background-color: #FFFFFF
  box-shadow: 0 3px 6px #00000030
  border-radius: 10px
  border-bottom-left-radius: 0
  border-bottom-right-radius: 0
  border-bottom: 3px solid black
  display: flex
  flex-wrap: wrap
  justify-content: center
  align-content: flex-start
  text-align: center
  height: 100%
  p
    font-size: 15px
    padding-right: .3rem
    padding-left: .3rem
    padding-bottom: .3rem
  img
    margin-top: 1rem
    margin-bottom: .5rem
.container-texto-offset-1
  background-color: white
  padding: 1rem 2.1rem
  width: 112%
  margin-left: -12%
  span
    font-weight: bold
    color: #1565C0
.edit-cajon-4
  background-color: #FFECB1 !important
  &.cajon.color-primario:before
    background-color: #FFCA28
.acordeon-t-4
  .linea-tiempo-d__item
    .linea-tiempo-d__item__content__title
      background-color: #E5E5E5
      border-radius: 5px
  .linea-tiempo-d__item--selected
    .linea-tiempo-d__item__content__title
      background-color: #F6F6F6
  .linea-tiempo-d__item__number
    span
      color: black
</style>
