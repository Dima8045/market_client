<template>
    <div class="row justify-content-center">
        <div class="col-md-10 mb-5 text-center">
            <ul class="product-category">
                <li>
                    <a style="cursor: pointer" @click.prevent="setActiveCategory(0); fetchProducts(0)" :class="{active: getActiveCategory() === 0}">All</a>
                </li>
                <li v-for="category in getCategories()" :key="category.id">
                    <a style="cursor: pointer" @click.prevent="setActiveCategory(category.id); fetchProducts(category.id)" :class="{active: getActiveCategory() === category.id}">{{ category.name }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
      methods: {
        ...mapActions(['fetchCategoriesList', 'setActiveCategory', 'fetchProducts']),
        ...mapGetters(['getCategories', 'getActiveCategory']),
      },
      mounted () {
        this.fetchCategoriesList()
        this.getCategories()
        console.log(this.getCategories())
      }
    }

</script>
