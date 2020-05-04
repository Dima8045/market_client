<template>
    <div>
        <hero-general :hero-title="heroTitle"></hero-general>

        <section class="ftco-section ftco-cart">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 ftco-animate">
                        <div class="cart-list">
                            <table v-if="!!getProductsByIds" class="table">
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
                                        <div v-if="getProductById(cart.id) && typeof (getProductById(cart.id).product_images) != 'undefined' && getProductById(cart.id).product_images.length > 0">

                                        <img class="img" :src=" getProductById(cart.id).image_folder + '/' + getProductById(cart.id).product_images[0].image ">
                                        </div>
                                    </td>
                                    <td class="product-name">
                                        {{ getProductById(cart.id) && getProductById(cart.id).name }}
                                    </td>

                                    <td class="price">${{ getProductById(cart.id).price }}</td>
                                    <td class="quantity">
                                        <div class="input-group mb-3">
                                            <input type="number" class="quantity form-control input-number" @change="signalChange" :data-id="cart.id" :value="cart.quantity" min="1" max="100">
                                        </div>
                                    </td>
                                    <td class="total">${{ (cart.quantity  *  getProductById(cart.id).price).toFixed(2) }}</td>

                                    <td class="product-remove">
                                        <a @click="addToCart({id:getProductById(cart.id) && getProductById(cart.id).id})" :class="{'changed-product': true }">
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
        cartProds: [],
        cart: [],
        price: 0
      }
    },
    computed: {
      ...mapGetters(['getCart', 'getCartProductsIds', 'getProductsByIds', 'getProductById']),
    },
    methods: {
      ...mapActions(['fetchProductsByIds']),
      ...mapMutations(['addToCart', 'changeQuantity']),
      signalChange: function(evt) {
        this.$emit("change", evt);
        this.changeQuantity({ id: evt.target.getAttribute('data-id'), quantity: evt.target.value})
      }
    },
    beforeMount() {
      this.fetchProductsByIds(this.getCartProductsIds)
    }
  }
</script>
