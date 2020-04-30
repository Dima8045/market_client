<template>
    <div>
        <hero-general :hero-title="heroTitle"></hero-general>

        <section class="ftco-section ftco-cart">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 ftco-animate">
                        <div class="cart-list">
                            <table v-if="!!getAllProducts()" class="table">
                                <thead class="thead-primary">
                                <tr class="text-center">
                                    <th>Image</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr class="text-center" v-for="cart in getCart" :key="cart.id">
                                    <td class="image-prod">
                                        <div v-if="typeof (getProductById()(cart.id).product_images) != 'undefined' && getProductById()(cart.id).product_images.length > 0">

                                        <img class="img" :src=" getProductById()(cart.id).image_folder + '/' + getProductById()(cart.id).product_images[0].image ">
                                        </div>
                                    </td>
                                    <td class="product-name">
                                        {{ getProductById(cart.id).name }}
                                    </td>

                                    <td class="price">${{ getProductById()(cart.id).price }}</td>
                                    <td class="quantity">
                                        <div class="input-group mb-3">
                                            <input type="number" class="quantity form-control input-number" :value="cart.quantity" min="1" max="100">
                                        </div>
                                    </td>
                                    <td class="total">$</td>
                                    <td class="total">$</td>

                                    <td class="product-remove">
                                        <a @click="addToCart({id:getProductById(cart.id).id})" :class="{'changed-product': true }">
                                            <span class="ion-ios-close"></span>
                                        </a>
                                    </td>

                                </tr><!-- END TR-->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-end">
                    <div class="col-lg-4 mt-5 cart-wrap ftco-animate">
                        <div class="cart-total mb-3">
                            <h3>Coupon Code</h3>
                            <p>Enter your coupon code if you have one</p>
                            <form action="#" class="info">
                                <div class="form-group">
                                    <label for="">Coupon code</label>
                                    <input type="text" class="form-control text-left px-3" placeholder="">
                                </div>
                            </form>
                        </div>
                        <p><router-link :to="{ name: 'checkout' }" class="btn btn-primary py-3 px-4">Apply Coupon</router-link></p>
                    </div>
                    <div class="col-lg-4 mt-5 cart-wrap ftco-animate">
                        <div class="cart-total mb-3">
                            <h3>Estimate shipping and tax</h3>
                            <p>Enter your destination to get a shipping estimate</p>
                            <form action="#" class="info">
                                <div class="form-group">
                                    <label for="">Country</label>
                                    <input type="text" class="form-control text-left px-3" placeholder="">
                                </div>
                                <div class="form-group">
                                    <label for="country">State/Province</label>
                                    <input type="text" class="form-control text-left px-3" placeholder="">
                                </div>
                                <div class="form-group">
                                    <label for="country">Zip/Postal Code</label>
                                    <input type="text" class="form-control text-left px-3" placeholder="">
                                </div>
                            </form>
                        </div>
                        <p><router-link :to="{ name: 'checkout' }" class="btn btn-primary py-3 px-4">Estimate</router-link></p>
                    </div>
                    <div class="col-lg-4 mt-5 cart-wrap ftco-animate">
                        <div class="cart-total mb-3">
                            <h3>Cart Totals</h3>
                            <p class="d-flex">
                                <span>Subtotal</span>
                                <span>$20.60</span>
                            </p>
                            <p class="d-flex">
                                <span>Delivery</span>
                                <span>$0.00</span>
                            </p>
                            <p class="d-flex">
                                <span>Discount</span>
                                <span>$3.00</span>
                            </p>
                            <hr>
                            <p class="d-flex total-price">
                                <span>Total</span>
                                <span>$17.60</span>
                            </p>
                        </div>
                        <p><router-link :to="{ name: 'checkout' }" class="btn btn-primary py-3 px-4">Proceed to Checkout</router-link></p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
  import { mapGetters, mapActions , mapMutations} from 'vuex'

  export default {
    data () {
      return {
        'heroTitle': 'Cart',
        quantity: null,
        productTotal: null,
        products: [],
        carts: [],
        cartProds: []
      }
    },
    computed: {
      ...mapGetters(['getCart']),
      // productAmount: () => {
      //   return this.cart.quantity
      // },
      // cartProducts: () {
      //   this.carts.forEach((cart) => {
      //     for (var i = 0; i < this.products.length; i++){
      //       if (this.products[i].id == cart.id){
      //         this.products[i].quantity = cart.quantity
      //         this.cartProds.push(this.products[i])
      //       }
      //     }
      //   })
      // },
      //
    },
    updated() {
      console.log('00000000000', this.products)
    },
    methods: {
      ...mapActions(['fetchProductsByIds']),
      ...mapGetters(['getAllProducts', 'getCartProductsIds', 'getProductsByIds', 'getProductById']),
      ...mapMutations(['addToCart', 'changeQuantity']),
      // changedCart: function (id) {
      //   let isActive = false
      //   this.getCart().forEach(function (value) {
      //     if (value.id == id){
      //       isActive = true;
      //       console.log(value.id, id)
      //     }
      //   })
      //   console.log(isActive)
      //   return isActive
      // },
      // cartProducts: function () {
      //   this.carts.forEach((cart) => {
      //     for (var i = 0; i < this.products.length; i++){
      //       if (this.products[i].id == cart.id){
      //         this.products[i].quantity = cart.quantity
      //         this.cartProds.push(this.products[i])
      //       }
      //     }
      //   })
      // },
      getQuantity: function(productId){
        let cart = this.getCart()
        for (var i = 0; i < cart.length; i++){
          if (cart[i].id == productId){
            this.quantity = cart[i].quantity
          }
        }
      },
    },
    mounted() {
      this.fetchProductsByIds(this.getCartProductsIds())
      // this.carts = this.getCart()
      this.products = this.getProductsByIds()
      // console.log(this.products, this.carts)
    }
  }
</script>
