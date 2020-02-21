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
                                    <th>Image</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="text-center" v-for="product in products" :key="product.id">
                                    <td class="image-prod"><img class="img" v-if="product.product_images && product.product_images.length > 0" :src=" product.image_folder + '/' + product.product_images[0].image "></td>

                                    <td class="product-name">
                                        <h3>{{ product.name }}</h3>
                                        <p class="product-short-desc">{{ product.description }}</p>
                                    </td>

                                    <td class="price">${{ product.price }}</td>

                                    <td class="product-remove">
                                        <a @click="removeWish({id:product.id}), fetchProductsByIds(getWishes())">
                                            <span class="ion-ios-close"></span>
                                        </a>
                                        &nbsp;
                                        <a @click="addToCart({id:product.id})" :class="{'changed-product': changedCart(product.id) }">
                                            <span class="ion-ios-cart"></span>
                                        </a>
                                    </td>

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
  import { mapGetters, mapActions, mapMutations } from 'vuex'

  export default {
    data() {
      return {
        heroTitle: 'My Wishlist',
      }
    },
    computed: {
      products: {
        get: function () {
          return this.$store.getters.getProductsByIds
        },
        set: function () {
          return []
        }
      }
    },
    methods: {
      ...mapActions(['addToWishes', 'fetchProductsByIds']),
      ...mapGetters(['getWishes', 'getCart']),
      ...mapMutations(['removeWish', 'addToCart']),
      changedCart: function (id) {
        let isActive = false
        this.getCart().forEach(function (value) {
          if (value.id == id){
            isActive = true;
          }
        })
        return isActive
      },

    },
    async mounted() {
      await this.fetchProductsByIds(this.getWishes())
      }
    }
</script>
