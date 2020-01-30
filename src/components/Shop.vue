<template>
    <div>
        <hero-general :hero-title="heroTitle"></hero-general>

        <section class="ftco-section">
            <div class="container">
                <categories-nav-section></categories-nav-section>
                <product-section></product-section>
                <div class="row mt-5">
                    <div class="col text-center">
                        <div class="block-27">
                            <ul>
                                <li><a href="#">&lt;</a></li>
                                <li class="active"><span>1</span></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li><a href="#">&gt;</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  import ProductSection from './sections/ProductsSection'
  import CategoriesNavSection from './sections/CategoriesNavSection'

  export default {
    components: {
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
