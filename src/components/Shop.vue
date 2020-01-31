<template>
    <div>
        <hero-general :hero-title="heroTitle"></hero-general>

        <section class="ftco-section">
            <div class="container">
                <categories-nav-section></categories-nav-section>
                <product-section></product-section>
                <pagination></pagination>
            </div>
        </section>
    </div>
</template>

<script>
  import Pagination from './elements/Pagination'
  import ProductSection from './sections/ProductsSection'
  import CategoriesNavSection from './sections/CategoriesNavSection'

  export default {
    components: {
      pagination: Pagination,
      productSection: ProductSection,
      categoriesNavSection: CategoriesNavSection
    },
    data() {
      return {
        'heroTitle': 'Shop',
      }
    },
    methods: {
    },
    mounted() {
        }
    }
</script>
