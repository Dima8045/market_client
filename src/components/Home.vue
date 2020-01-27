<template>
    <div>
        <hero-main></hero-main>
        <services-section></services-section>
        <categories-section></categories-section>
    </div>
</template>

<script>
    import HeroMain from './elements/HeroMain'
    import ServisesSection from './sections/ServicesSection'
    import CategoriesSection from './sections/CategoriesSection'
    export default {
      components: {
        'hero-main': HeroMain,
        'services-section': ServisesSection,
        'categories-section': CategoriesSection
      },
        mounted() {

        }
    }
</script>
