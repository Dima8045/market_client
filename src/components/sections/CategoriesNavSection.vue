<template>
    <div class="row justify-content-center">
        <div class="col-md-10 mb-5 text-center">
            <ul class="product-category">
                <li>
                    <a style="cursor: pointer" @click.prevent="setActiveCategory(0); fetchProducts(0)" :class="{active: getActiveCategory() === 0}">All</a>
                </li>
                <li v-for="category in getAllCategories()" :key="category.id">
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
        ...mapActions(['fetchCategories', 'setActiveCategory', 'fetchProducts']),
        ...mapGetters(['getAllCategories', 'getActiveCategory']),
      },
      mounted () {
        this.fetchCategories()
        this.getAllCategories()
      }
    }

</script>
