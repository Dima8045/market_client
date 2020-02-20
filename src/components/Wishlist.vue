<template>
    <div>
        <hero-general :hero-title="heroTitle"></hero-general>

        <section class="ftco-section ftco-cart">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 ftco-animate">
                        <div class="cart-list">
                            <table class="table">
                                <thead class="thead-primary">
                                <tr class="text-center">
                                    <th>Action</th>
                                    <th>&nbsp;</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="text-center" v-for="product in getProductsByIds(getWishes())" :key="product.id">
                                    <td class="image-prod"><img class="img" :src="product.product_images[0] ? product.image_folder + '/' + product.product_images[0].image : ''"></td>

                                    <td class="product-name">
                                        <h3>{{ product.name }}</h3>
                                        <p class="product-short-desc">{{ product.description }}</p>
                                    </td>

                                    <td class="price">${{ product.price }}</td>

                                    <td class="product-remove"><a @click="addToWishes({id:product.id})"><span class="ion-ios-close"></span></a></td>

                                </tr><!-- END TR-->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        heroTitle: 'My Wishlist',
        products: [],
        quantity: 1,
      }
    },
    methods: {
      ...mapActions(['addToWishes', 'fetchProductsByIds']),
      ...mapGetters(['getWishes', 'getProductsByIds']),
    },
    mounted() {
      this.fetchProductsByIds(this.getWishes())
      }
    }
</script>
