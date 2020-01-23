<template>
    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div class="container">
            <router-link :to="{ name: 'home' }" class="navbar-brand" >Vegefoods</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="oi oi-menu"></span> Menu
            </button>

            <div class="collapse navbar-collapse" id="ftco-nav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active"><router-link :to="{ name: 'home' }" class="nav-link">Home</router-link></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
                        <div class="dropdown-menu" aria-labelledby="dropdown04">
                            <router-link class="dropdown-item" :to="{ name: 'shop' }">Shop</router-link>
                            <router-link class="dropdown-item" :to="{ name: 'wishlist' }">Wishlist</router-link>
                            <router-link class="dropdown-item" :to="{ name: 'cart' }">Cart</router-link>
                            <router-link class="dropdown-item" :to="{ name: 'checkout' }">Checkout</router-link>
                        </div>
                    </li>
                    <li class="nav-item"><router-link :to="{ name: 'about' }" class="nav-link">About</router-link></li>
                    <li class="nav-item"><router-link :to="{ name: 'blog' }" class="nav-link">Blog</router-link></li>
                    <li class="nav-item"><router-link :to="{ name: 'contact' }" class="nav-link">Contact</router-link></li>
                    <li class="nav-item cta cta-colored"><router-link :to="{ name: 'cart' }" class="nav-link"><span class="icon-shopping_cart"></span>[0]</router-link></li>
                    <li class="nav-item" v-if="!getUser.name"><router-link :to="{ name: 'signin' }" class="nav-link">Signin</router-link></li>
                    <li class="nav-item" v-if="getUser.name"><a href="signout" @click.prevent="logout" class="nav-link">Signout</a></li>
                    <li class="nav-item" v-if="!getUser.name"><router-link :to="{ name: 'register' }" class="nav-link">Register</router-link></li>
                    <li class="nav-item" v-if="getUser.name"><span class="nav-link" v-text="getUser.name"></span></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
      mounted() {
      },
      computed: mapGetters(['getUser']),
      methods: {
          ...mapActions(['logout'])
      }
    }
</script>
