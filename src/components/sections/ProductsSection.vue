<template>
    <div class="row">
        <div class="col-md-6 col-lg-3 ftco-animate" v-for="product in getAllProducts().data" :key="product.id">
            <div class="product">
                <a href="#" class="img-prod"><img class="img-fluid" :src="product.product_images[0] ? product.image_folder + '/' + product.product_images[0].image : ''" alt="Colorlib Template">
                    <span class="status">30%</span>
                    <div class="overlay"></div>
                </a>
                <div class="text py-3 pb-4 px-3 text-center">
                    <h3><a href="#">{{ product.name }}</a></h3>
                    <div class="d-flex">
                        <div class="pricing">
                            <p class="price"><span class="mr-2 price-dc">$120.00</span><span class="price-sale">${{ product.price }}</span></p>
                        </div>
                    </div>
                    <div class="bottom-area d-flex px-3">
                        <div class="m-auto d-flex">
                            <a href="#" class="product-action add-to-cart d-flex justify-content-center align-items-center text-center">
                                <span><i class="ion-ios-menu"></i></span>
                            </a>
                            <a style="cursor: pointer" v-animate-css.click="'bounceIn'" @click="addToCart({id:product.id})"
                               :class="{'changed-product': changedCart(product.id) }"
                               class="product-action buy-now d-flex justify-content-center align-items-center mx-1">
                                <span><i class="ion-ios-cart"></i></span>
                            </a>
                            <a style="cursor: pointer" v-animate-css.click="'bounceIn'" @click="addToWishes({id:product.id})"
                               :class="{'changed-product': changedWish(product.id) }"
                               class="product-action heart d-flex justify-content-center align-items-center">
                                <span><i class="ion-ios-heart"></i></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex'

  export default {
    methods: {
      ...mapMutations(['addToCart', 'addToWishes']),
      ...mapActions(['fetchProducts']),
      ...mapGetters(['getActiveCategory','getAllProducts', 'getCart', 'getWishes']),
      changedCart: function (id) {
        let isActive = false
        this.getCart().forEach(function (value) {
          if (value.id == id){
            isActive = true;
          }
        })
        return isActive
      },
      changedWish: function (id) {
        let isActive = false
        this.getWishes().forEach(function (value) {
          if (value.id == id){
            isActive = true;
          }
        })
        return isActive
      }
    },
    mounted () {
      this.fetchProducts()
    }
  }
</script>
