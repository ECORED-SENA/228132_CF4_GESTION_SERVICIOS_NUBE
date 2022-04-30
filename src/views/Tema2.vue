<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Contratación

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
          p ¿Qué nivel de soporte y respuesta a incidentes esperan por parte del proveedor?
          img.img-number(src="@/assets/curso/temas/tema2/img-card-number-2.svg")
      .col-12.col-md-4.p-3
        .container-step-card(style="background-color: #F59D36")
          img(src="@/assets/curso/temas/tema2/img-card-3.svg" style="max-width: 94px; position: relative; z-index: 1;")
          p ¿Cómo la organización puede validar la calidad en el servicio ofrecido por el proveedor?
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
      p.ps-3.fw-bold.mb-0(style="color: #1565C0") Es decir, <em>cloud computing</em>, puede usar tecnologías de la información y las comunicaciones, mediante técnicas ya existentes, pero de forma innovadora y a una nueva escala. Esta transformación de negocio puede hacer que las personas u organizaciones contratantes del servicio, desconozcan la localización precisa de sus datos, o no tengan control directo sobre el acceso a estos, el borrado o la portabilidad, en relación a este aspecto en Colombia, la legislación vigente a nivel de regulaciones más responsables, aún está en diseño.
    .d-flex.mb-5.align-items-start.align-items-md-center
      img(src="@/assets/curso/temas/tema2/img-4.svg" style="max-width: 87px; margin-right: -43.5px; position: relative")
      div(style="background-color: white; box-shadow: 0 3px 6px #00000030; border-radius: 10px; padding: 1rem")
        p.mb-0.ps-5 En razón a estas regulaciones de orden nacional e internacional, es necesario tener claro entre las partes, cuales son las condiciones, acuerdos o reglas para la prestación y consumo de productos y/o servicios, basados en las políticas y documentos contractuales establecidos para tal fin en el orden de la prestación de servicios de <em>cloud computing</em>.

    Separador

    .titulo-segundo.color-acento-contenido.mb-5
      h2#t_2_1 2.1 Concepto
    
    .d-flex.flex-wrap.px-5.pe-md-0.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/bg-4.svg')})`}"
      style="background-repeat: no-repeat; background-position: bottom; margin-left: -3rem; margin-right: -3rem;"
    )
      img(src="@/assets/curso/temas/tema2/img-5.png" style="max-width: 469px; max-height: 495px").col-12.col-md-5.mb-5.mb-md-auto
      .col-12.col-md-7
        .col-12.col-md-11.mx-auto
          .bloque-texto-c.color-secundario.p-4.bg-gradient-1
            img(src="@/assets/curso/temas/tema2/decorador-bg-1.svg")
            p Se define contratación como <b>“Pacto o convenio, oral o escrito, entre partes que se obligan sobre materia o cosa determinada, y a cuyo cumplimiento pueden ser compelidas”</b>.
            span Según la RAE (Real Academia Española)
        .col-12
          .cajon.color-primario.p-4.mb-4.edit-cajon-2
            p La contratación de servicios de <em><b>cloud computing</b></em> se lleva a cabo mediante un contrato de prestación de servicios, que se define como el contrato mediante el cual una persona, normalmente un especialista, en algún área, se obliga con respecto a otra a realizar una serie de servicios a cambio de un precio. <b>Es importante señalar que el pago del contrato está dirigido al cumplimiento de metas, horas, objetivos, proyectos, etc.</b> Se trata de un contrato oneroso, y a la contraprestación de pago, es en dinero o especie la cual será pagada proporcionalmente conforme a las actividades realizadas.

    p.mb-5 Un contrato oneroso, se define como un tipo de contrato en que ambas partes tienen obligaciones y ventajas económicas recíprocas. Entre los más comunes están: el de compraventa, arrendamiento, sociedad, permuta, transporte y el contrato de trabajo.
    img(src="@/assets/curso/temas/tema2/bg-5.svg" style="position: absolute; margin-left: -3rem; margin-right: -3rem; z-index: 0")
    .d-flex.flex-wrap(style="position: relative; z-index: 1;")
      .col-6.col-md-4.col-xl-2.px-2.mb-4
        .container-card-12.p-4
          img(src="@/assets/curso/temas/tema2/img-card-12-1.svg" style="max-width: 72px").mx-auto.mb-3
          p.mb-0.text-center Compraventa
      .col-6.col-md-4.col-xl-2.px-2.mb-4
        .container-card-12.p-4
          img(src="@/assets/curso/temas/tema2/img-card-12-2.svg" style="max-width: 72px").mx-auto.mb-3
          p.mb-0.text-center Arrendamiento
      .col-6.col-md-4.col-xl-2.px-2.mb-4
        .container-card-12.p-4
          img(src="@/assets/curso/temas/tema2/img-card-12-3.svg" style="max-width: 72px").mx-auto.mb-3
          p.mb-0.text-center Sociedad
      .col-6.col-md-4.col-xl-2.px-2.mb-4
        .container-card-12.p-4
          img(src="@/assets/curso/temas/tema2/img-card-12-4.svg" style="max-width: 72px").mx-auto.mb-3
          p.mb-0.text-center Permuta
      .col-6.col-md-4.col-xl-2.px-2.mb-4
        .container-card-12.p-4
          img(src="@/assets/curso/temas/tema2/img-card-12-5.svg" style="max-width: 72px").mx-auto.mb-3
          p.mb-0.text-center Transporte
      .col-6.col-md-4.col-xl-2.px-2.mb-4
        .container-card-12.p-4
          img(src="@/assets/curso/temas/tema2/img-card-12-6.svg" style="max-width: 72px").mx-auto.mb-3
          p.mb-0.text-center Contrato de trabajo

    Separador(style="position: relative; z-index: 1;")

    .titulo-segundo.color-acento-contenido.mb-5(style="position: relative; z-index: 1;")
      h2#t_2_2 2.2 Tipos de contrato

    p.mb-5(style="position: relative; z-index: 1;") Como se indicaba anteriormente,<span style="color: #1565C0; font-weight: bold"> la contratación de servicios de <em>cloud computing</em> se realizará por medio de un contrato de prestación de servicios</span>. Resulta imprescindible que ese contrato incorpore entre sus cláusulas las garantías a las que obliga la Ley de Protección de Datos.
    .d-flex.flex-wrap.mb-5(style="position: relative; z-index: 1;")
      .col-12.col-md-6.d-flex.pe-0.pe-md-2.mb-4.mb-md-0
        .container-box-2-2
          img(src="@/assets/curso/temas/tema2/img-6.svg" style="max-width: 331px; margin-top: 1.5rem").mb-5
          p Ley 1581 de 2012, la presente ley tiene por objeto desarrollar el derecho constitucional que tienen todas las personas a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bases de datos o archivos, y los demás derechos, libertades y garantías constitucionales a que se refiere el artículo 15 de la Constitución Política; así como el derecho a la información consagrado en el artículo 20 de la misma.
          img(src="@/assets/curso/temas/tema2/decorador-1.svg" style="max-width: 86px").ms-auto
      .col-12.col-md-6.d-flex.ps-0.ps-md-2
        .container-box-2-2.h-100
          div
            img(src="@/assets/curso/temas/tema2/img-7.svg" style="max-width: 331px; margin-top: 1.5rem").mb-5
            p El Decreto tiene como objeto reglamentar parcialmente la Ley 1581 de 2012, por la cual se dictan disposiciones generales para la protección de datos personales.
          img(src="@/assets/curso/temas/tema2/decorador-1.svg" style="max-width: 86px").ms-auto


    .d-flex.flex-wrap.px-5.pe-md-0(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/bg-4.svg')})`}"
      style="background-repeat: no-repeat; background-position: bottom; margin-left: -3rem; margin-right: -3rem;"
    )
      img(src="@/assets/curso/temas/tema2/img-8.png" style="max-width: 469px; max-height: 505px").col-12.col-md-5.mb-5.mb-md-auto
      .col-12.col-md-7
        .d-flex.mt-4.pt-3
          img(src="@/assets/curso/temas/tema2/decorador-2.svg" style="max-width: 29px").mx-3.mb-5.mt-1
          p(style="color: #1565C0; font-weight: bold;") Atendiendo a la relación contractual establecida entre el cliente y el proveedor de la nube, también este contrato se puede clasificar como negociado o de adhesión. Podemos decir que un contrato entre el cliente y el proveedor es negociado si el primero tiene, o se le ofrece, la capacidad para fijar las condiciones de contratación en función del tipo de datos que se van a procesar, las medidas de seguridad exigibles, el esquema de subcontratación, la localización de los datos, la portabilidad de los mismos y cualquier otro aspecto de adecuación a la regulación organizacional y a las restricciones que esta regulación implica.
        p.texto-final-decorador En la mayoría de los casos, sin embargo, lo que se oferta son contratos de adhesión, constituidos por cláusulas contractuales cerradas, en las que <span style="color: #2EC49F; font-weight: bold;">el proveedor de <em>cloud</em> fija las condiciones con un contrato tipo igual para todos sus clientes, sin que el usuario tenga ninguna opción para negociar sus términos</span>. Este último caso es el más común, sobre todo cuando se encuentra el cliente en una situación de desequilibrio <span style="font-weight: bold;">(p.ej.: una pyme frente a un gran proveedor)</span>, aunque hay que tener en cuenta que esto no eximirá, a ninguno de los dos, de las responsabilidades que determina la ley de protección de datos.
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
.bg-gradient-1
  background: linear-gradient(170deg, #039BE5, #027FBC)
  border-radius: 15px
  position: relative
  padding-top: 65px !important
  margin-bottom: 3rem
  box-shadow: 0 3px 6px #00000030
  img
    max-width: 73px
    position: absolute
    top: -15px
  p
    margin-bottom: 0
    color: white
  span
    position: relative
    margin-left: auto
    display: flex
    justify-content: flex-end
    padding-right: 3rem
    bottom: -1.7rem
    color: white
    font-weight: bold
.edit-cajon-2
  background-color: #FFECB1 !important
  &.cajon.color-primario:before
    background-color: #FFCA28
.container-card-12
  background-color: white
  box-shadow: 0 3px 6px #00000030
  border-radius: 10px
.container-box-2-2
  background: linear-gradient(-15deg, #2EC49F, #2B3990)
  padding: 2rem
  border-radius: 10px
  display: flex
  flex-wrap: wrap
  align-content: space-between
  p
    color: white
.texto-final-decorador
  background-color: white
  box-shadow: 0 3px 6px #00000030
  padding: 1rem 2rem
  margin-left: -6rem
  @media (max-width: 768px)
    margin-left: 0
    margin-right: 0
</style>
