<template>
    <section class="ftco-section ftco-category ftco-no-pt">
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="row">
                        <div class="col-md-6 order-md-last align-items-stretch d-flex">
                            <div class="category-wrap-2 ftco-animate img align-self-stretch d-flex" style="background-image: url(images/category.jpg);">
                                <div class="text text-center">
                                    <h2>Vegetables</h2>
                                    <p>Protect the health of every home</p>
                                    <p><router-link :to="{ name: 'shop' }" class="btn btn-primary">Shop now</router-link></p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6" >
                            <div v-for="category in categories.slice(0, 2)" :key="category.id" class="category-wrap ftco-animate img mb-4 d-flex align-items-end"
                                 v-bind:style="{ 'background-image': 'url(' + category.image_folder + '/' + category.category_images[0].image +')' }">
                                <div class="text px-3 py-1">
                                    <router-link :to="{ name: 'shop', params: {category: category.name.toLowerCase() } }"><h2 class="mb-0 text-light" @click="setActiveCategory(category.id)">{{ category.name}}</h2></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div v-for="category in categories.slice(2, 4)" :key="category.id" class="category-wrap ftco-animate img mb-4 d-flex align-items-end"
                         v-bind:style="{ 'background-image': 'url(' + category.image_folder + '/' + category.category_images[0].image  +')' }">
                        <div class="text px-3 py-1">
                            <router-link :to="{ name: 'shop', params: {category: category.name.toLowerCase() } }"><h2 class="mb-0 text-light" @click="setActiveCategory(category.id)">{{ category.name}}</h2></router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
      data() {
        return {
          categories: []
        }
      },
      methods: {
        ...mapActions(['fetchCategories', 'setActiveCategory', 'fetchProducts']),
        ...mapGetters(['getCategories']),
      },
      async mounted () {
        await this.fetchCategories()
        this.categories = this.getCategories()
      }
    }
</script>
