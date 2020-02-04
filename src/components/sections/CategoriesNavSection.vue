<template>
    <div class="row justify-content-center">
        <div class="col-md-10 mb-5 text-center">
            <ul class="product-category">
                <li @click="setActiveCategory(0); fetchProducts(0)">
                    <router-link :to="{ name: 'shop', params: {category: 'all' } }"  :class="{active: getActiveCategory() === 0}">All</router-link>
                </li>
                <li v-for="category in getCategories()" :key="category.id"  @click="setActiveCategory(category.id); fetchProducts(category.id)">
                    <router-link :to="{ name: 'shop', params: {category: category.name.toLowerCase() } }" :class="{active: getActiveCategory() === category.id}">{{ category.name }}</router-link>
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
        this.getCategories()
      }
    }

</script>
