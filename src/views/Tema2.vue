<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Titulo de primer nivel

    .position-relative.mb-5
      img(src="@/assets/curso/temas/tema2/img-1.png").d-none.d-md-flex
      img(src="@/assets/curso/temas/tema2/img-1-movil.png").d-flex.d-md-none
      .container-text-introduccion.col-11.mx-auto
        p.mb-0 <b>La necesidad de contar con acuerdos de nivel de servicios entre el cliente y el proveedor que entrega el servicio</b>, para lograr esto al momento de planear la migración de servicios de computación tradicional a computación en la nube las organizaciones <span>deben de responder una serie de preguntas que ayudarán a definir los objetivos del nivel del servicio</span>, los interrogantes son:
    img(src="@/assets/curso/temas/tema2/bg-1.svg" style="position: absolute; top: 400px; margin-left: -3rem; margin-right: -3rem; z-index: 0")
    .d-flex.flex-wrap.mb-5
      .col-12.col-md-4.p-3
        .container-step-card(style="background-color: #2EC49F")
          img(src="@/assets/curso/temas/tema2/img-card-1.svg" style="max-width: 79px; position: relative; z-index: 1;")
          p ¿Cuáles y en qué cantidad son los servicios a contratar?
          img.img-number(src="@/assets/curso/temas/tema2/img-card-number-1.svg")
      .col-12.col-md-4.p-3
        .container-step-card(style="background-color: #5793CE")
          img(src="@/assets/curso/temas/tema2/img-card-2.svg" style="max-width: 94px; position: relative; z-index: 1;")
          p ¿Cuáles y en qué cantidad son los servicios a contratar?
          img.img-number(src="@/assets/curso/temas/tema2/img-card-number-2.svg")
      .col-12.col-md-4.p-3
        .container-step-card(style="background-color: #F59D36")
          img(src="@/assets/curso/temas/tema2/img-card-3.svg" style="max-width: 94px; position: relative; z-index: 1;")
          p ¿Cuáles y en qué cantidad son los servicios a contratar?
          img.img-number(src="@/assets/curso/temas/tema2/img-card-number-3.svg")
    p.mb-5(style="position: relative; z-index: 1;") <b>La respuesta a estas preguntas es lo que permite determinar los objetivos del acuerdo de nivel de servicios o SLA</b> donde se establece un contrato entre el proveedor (externo o interno) y el cliente donde se establecen los servicios y las características de los mismos que el cliente espera de su proveedor.
    .col-12.col-xl-8.mb-5(style="position: relative; z-index: 1; background: linear-gradient(180deg, #039BE5, #027FBC); margin-top: -26px")
      p.mb-0.p-2.fw-bold(style="font-size: 18px; color: white;") Un acuerdo de nivel de servicio puede contar entre otras con las siguientes características:

    .d-flex.flex-wrap(style="position: relative")
      .col-12.col-md-7.mx-auto
        img(src="@/assets/curso/temas/tema2/img-2.png" style="max-width: 681px; position: relative")
      .col-12.col-md-4.mx-auto.container-slide-f
        SlyderF.justify-content-strtch(columnas="col-12")
          .tarjeta.color-acento-botones.m-3.p-4.h-100(style="background-color: #FFFFFF; box-shadow: 0 3px 6px #00000030")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/img-carousel-1.svg' alt='AvatarTop')
            p.text-center Una definición de los servicios que el proveedor de servicios proporcionará al cliente.

          .tarjeta.color-acento-botones.m-3.p-4.h-100(style="background-color: #FFFFFF; box-shadow: 0 3px 6px #00000030")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/img-carousel-2.svg' alt='AvatarTop')
            p.text-center Métodos para medir el rendimiento (indicadores de medición).

          .tarjeta.color-acento-botones.m-3.p-4.h-100(style="background-color: #FFFFFF; box-shadow: 0 3px 6px #00000030")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/img-carousel-3.svg' alt='AvatarTop')
            p.text-center Protocolos para administrar problemas (métodos y canales de atención y soporte a usuarios, tiempos de respuesta y solución de incidentes).
          .tarjeta.color-acento-botones.m-3.p-4.h-100(style="background-color: #FFFFFF; box-shadow: 0 3px 6px #00000030")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/img-carousel-4.svg' alt='AvatarTop')
            p.text-center Una lista de tareas de cliente (responsabilidades).

          .tarjeta.color-acento-botones.m-3.p-4.h-100(style="background-color: #FFFFFF; box-shadow: 0 3px 6px #00000030")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/img-carousel-5.svg' alt='AvatarTop')
            p.text-center Garantías que debe respetar el proveedor de servicios.

          .tarjeta.color-acento-botones.m-3.p-4.h-100(style="background-color: #FFFFFF; box-shadow: 0 3px 6px #00000030")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/img-carousel-6.svg' alt='AvatarTop')
            p.text-center Procedimientos necesarios para la recuperación ante desastres (continuidad del negocio).

          .tarjeta.color-acento-botones.m-3.p-4.h-100(style="background-color: #FFFFFF; box-shadow: 0 3px 6px #00000030")
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/tema2/img-carousel-7.svg' alt='AvatarTop')
            p.text-center Proceso y directivas con respecto a la terminación del contrato.
    
    .d-flex.flex-wrap.align-items-center.px-5.pe-md-0.mb-4(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/bg-3.svg')})`}"
      style="background-repeat: no-repeat; background-position: center; margin-left: -3rem; margin-right: -3rem;"
    )
      p.col-12.col-md-7.mb-0 <b>Este manejo de las características del servicio, permite la optimización de asignación y costos de recursos en cuanto al tratamiento de la información</b>. Pues no se requiere una inversión en infraestructura, pues es utilizada la del prestador del servicio, a la vez que se busca garantía en dicha prestación, en cuanto a fallas o exceso de recursos, o los costos que puede acarrear situaciones como estas. Como sabemos, <b>la gestión de la información se encuentra de manera virtual, en manos del cliente o la organización contratante de servicios en la nube, que puede ser accedida a través de internet, mediante bases de datos, correo electrónico, nóminas o gestión de recursos humanos</b>. Sin embargo, puede que los datos no estén necesariamente en manos del contratista, dependiendo del modelo utilizado, por lo que el mantenimiento y soporte físico de la información, los procesos y las comunicaciones, pueden regularse por medio de terceros, quien regula el servicio desde cualquier parte del mundo, por medio de recursos como prácticas de deslocalización, compartición de recursos y movilidad, o si es el caso con contratos adicionales AT&T &TA T 6.
      img(src="@/assets/curso/temas/tema2/img-3.png" style="max-width: 518px").col-12.col-md-5

    .d-flex.mb-5.mx-md-4
      img(src="@/assets/curso/temas/tema1/decorador-1.svg" style="max-width: 41px")
      p.ps-3.fw-bold.mb-0(style="color: #1565C0") Es decir, cloud computing, puede usar tecnologías de la información y las comunicaciones, mediante técnicas ya existentes, pero de forma innovadora y a una nueva escala. Esta transformación de negocio puede hacer que las personas u organizaciones contratantes del servicio, desconozcan la localización precisa de sus datos, o no tengan control directo sobre el acceso a estos, el borrado o la portabilidad, en relación a este aspecto en Colombia, la legislación vigente a nivel de regulaciones más responsables, aún está en diseño.
    .d-flex.mb-5.align-items-start.align-items-md-center
      img(src="@/assets/curso/temas/tema2/img-4.svg" style="max-width: 87px; margin-right: -43.5px; position: relative")
      div(style="background-color: white; box-shadow: 0 3px 6px #00000030; border-radius: 10px; padding: 1rem")
        p.mb-0.ps-5 En razón a estas regulaciones de orden nacional e internacional, es necesario tener claro entre las partes, cuales son las condiciones, acuerdos o reglas para la prestación y consumo de productos y/o servicios, basados en las políticas y documentos contractuales establecidos para tal fin en el orden de la prestación de servicios de cloud computing.

    Separador

    .titulo-segundo.color-acento-contenido.mb-5
        h2#t_2_1 2.1 Concepto
</template>

<script>
export default {
  name: 'Tema2',
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
.container-text-introduccion
  position: relative
  top: -50px
  padding: 2rem
  background: linear-gradient(0deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 35%, rgba(222,222,222,1) 100%)
  border-radius: 10px
  span
    color: #1565C0
    font-weight: bold
.container-step-card
  border-top-right-radius: 62px
  border-bottom-left-radius: 62px
  position: relative
  min-height: 221px
  padding-right: 2rem
  padding-left: 2rem
  display: flex
  flex-wrap: wrap
  align-content: center
  p
    margin-top: .5rem
    position: relative
    z-index: 1
  .img-number
    position: absolute
    max-width: 192px
    top: 0
    right: 0
    z-index: 0
    transition: all .5s linear
  &:hover
    .img-number
      right: 50%
      transform: translateX(50%)
.container-slide-f
  .horizontal-scroll
    align-items: stretch !important
    .slyder-f__slyde
      margin-bottom: 2rem !important
</style>
