<template>
    <div>
        <hero-general :hero-title="heroTitle"></hero-general>

        <section class="ftco-section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-7 ftco-animate">
                        <form id="billing-form" class="billing-form">
                            <h3 class="mb-4 billing-heading">Billing Details</h3>
                            <div class="row align-items-end">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="first_name">Firt Name</label>
                                        <input type="text" id="first_name" v-model="firstName" class="form-control" placeholder="">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="last_name">Last Name</label>
                                        <input type="text" id="last_name" v-model="lastName" class="form-control" placeholder="">
                                    </div>
                                </div>
                                <div class="w-100"></div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="address">Address</label>
                                        <div class="select-wrap">
                                            <div class="icon"><span class="ion-ios-arrow-down"></span></div>
                                            <input type="text" id="address" class="form-control">
                                        </div>
                                    </div>
                                </div>
                                <div class="w-100"></div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="country">Country</label>
                                        <div class="select-wrap">
                                            <div class="icon"></div>
                                            <input type="text" id="country" class="form-control" v-model="country">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="state">State / Region</label>
                                        <div class="select-wrap">
                                            <div class="icon"></div>
                                            <input type="text" id="state" class="form-control" v-model="state" disabled>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-100"></div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="street">Street Address</label>
                                        <input type="text" id="street" class="form-control" placeholder="Street name" v-model="street" disabled>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <input type="text" class="form-control" v-model="houseNumber" placeholder="House number">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <input type="text" class="form-control" v-model="apartment" placeholder="Apartment, suite, unit etc: (optional)">
                                    </div>
                                </div>
                                <div class="w-100"></div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="city">Town / City</label>
                                        <input type="text" id="city"  class="form-control" placeholder="" v-model="city" disabled required>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="postal_code">Postcode / ZIP *</label>
                                        <input type="text" id="postal_code" class="form-control" placeholder="" v-model="postalCode" required>
                                    </div>
                                </div>
                                <div class="w-100"></div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="phone">Phone</label>
                                        <input type="tel" id="phone" class="form-control" placeholder="" v-model="phone" required>
                                    </div>
                                </div>
                            </div>
                        </form><!-- END -->
                    </div>
                    <div class="col-xl-5">
                        <div class="row mt-5 pt-3">
                            <div class="col-md-12 d-flex mb-5">
                                <div class="cart-detail cart-total p-3 p-md-4">
                                    <h3 class="billing-heading mb-4">Cart Total</h3>
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
                            </div>
                            <div class="col-md-12">
                                <div class="cart-detail p-3 p-md-4">
                                    <h3 class="billing-heading mb-4">Payment Method</h3>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <div class="radio">
                                                <label><input type="radio" name="optradio" class="mr-2"> Direct Bank Tranfer</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <div class="radio">
                                                <label><input type="radio" name="optradio" class="mr-2"> Check Payment</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <div class="radio">
                                                <label><input type="radio" name="optradio" class="mr-2"> Paypal</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="col-md-12">
                                            <div class="checkbox">
                                                <label><input type="checkbox" value="" class="mr-2"> I have read and accept the terms and conditions</label>
                                            </div>
                                        </div>
                                    </div>
                                    <p><button @click="storeBillingDetails()" class="btn btn-primary py-3 px-4">Place an order</button></p>
                                </div>
                            </div>
                        </div>
                    </div> <!-- .col-md-8 -->
                </div>
            </div>
        </section> <!-- .section -->
    </div>
</template>

<script>
  export default {
    data() {
      return {
        heroTitle: 'Checkout',
        firstName: '',
        lastName: '',
        country: '',
        state: '',
        city: '',
        street: '',
        houseNumber: '',
        apartment: '',
        phone: '',
        postalCode: '',
      }
    },
    methods: {
      initMap: function () {

        var input = document.getElementById('address');
        var options = {
          types: ['address'],
          componentRestrictions: { country: 'ua' },
        };

        let autocomplete = new window.google.maps.places.Autocomplete(input, options);

        window.google.maps.event.addListener(autocomplete, 'place_changed', () => {
          let place = autocomplete.getPlace()
          if (typeof place.address_components != 'undefined') {
            console.log(place.address_components)
            typeof place.address_components.map((item) => {
              switch (item.types[0]) {
                case 'route': this.street = item.short_name
                  break
                case 'locality': this.city = item.short_name
                  break
                case 'administrative_area_level_1': this.state = item.short_name
                  break
                case 'sublocality_level_1': this.state += this.state + ', ' + item.short_name
                  break
                case 'country': this.country = item.long_name
                  break
                case 'postal_code': this.postalCode = item.short_name
                  break
                default : ''
                  break
              }
            })
          } else {
            let placeArr = place.name.split(',')
            this.postalCode = ''
            this.street = placeArr[0]
            this.city = placeArr[1]
            this.state = placeArr.length === 4 ? placeArr[2] : ''
            this.country = placeArr.length === 3 ? placeArr[2] : placeArr.length === 4 && placeArr[3]
          }

          console.log(autocomplete.getPlace())
        });
      },

      storeBillingDetails: function() {
        let form = {
          first_name: this.firstName,
          last_name: this.lastName,
          country: this.country,
          state: this.state,
          city: this.city,
          street: this.street,
          house_number: this.houseNumber,
          apartment: this.apartment,
          phone: this.phone,
          postalCode: this.postalCode,
        }
        console.log(form)
      }
    },
    mounted() {
      this.initMap()
    }
}
</script>
