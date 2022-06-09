<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .d-flex.flex-wrap.align-items-center.px-5.mb-5(
      :style="{'background-image': `url(${require('@/assets/curso/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: bottom; margin-left: -3rem; margin-right: -3rem;"
    )
      img(src="@/assets/curso/img-sintesis-1.png" style="max-width: 505px; max-height: 350px").col-12.col-md-5.mb-md-auto
      .col-12.col-md-7.pt-5.d-flex.flex-wrap.mb-4
        p.texto-final-decorador-t3.mb-3 El diseño y documentación requerida para la formulación de propuestas de servicios en la nube, debe involucrar de manera clara las condiciones en las cuales se va a prestar el servicio, por esta razón, la claridad en la negociación, así como los derechos y deberes de cada uno de los actores es fundamental en la comunicación establecida entre las partes.
        .d-flex
          img(src="@/assets/curso/decorador-1.svg" style="max-width: 29px").mx-3
          p.mb-0(style="color: #1565C0; font-weight: bold;") No es un secreto que el <em>cloud computing</em>, es útil como modelo de negocio, puesto que el <em>software</em> reduce los costos mediante servidores centralizados en internet, en lugar de servidores locales, al eliminar gastos de mantenimiento, licencias y <em>hardware</em> necesario para mantener los servidores, permite que las empresas puedan ejecutar aplicaciones fluida y eficientemente. Por lo que los proyectos formulados en este entorno posibilitan un mejor desarrollo del uso de las tecnologías, manteniendo vigencia en su aplicación y conocimiento:

    p.mb-5 El siguiente mapa ofrece una vista rápida de los contenidos de este componente formativo:

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/img-sintesis.svg", alt="alt")

</template>

<script>
export default {
  name: 'Sintesis',
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
.texto-final-decorador-t3
  background-color: white
  box-shadow: 0 3px 6px #00000030
  padding: 1rem 2rem
  margin-left: -6rem
  @media (max-width: 768px)
    margin-left: 0
    margin-right: 0
</style>
