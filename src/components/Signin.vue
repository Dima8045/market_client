<template>
    <div>
        <hero-general :hero-title="heroTitle"></hero-general>

        <div class="container">
            <div class="row justify-content-center block-9">
                <div class="col-xl-5">
                    <form id="signin-form" class="bg-white p-5 contact-form">
                        <div class="form-group">
                            <input type="email" :validate="'required'" class="form-control" v-model="email" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <input type="password" :validate="'required'" name="password" class="form-control" v-model="password" placeholder="Password">
                        </div>
                        <div class="form-group text-center">
                            <input type="button" id="signin" @click.prevent="submit" value="Sign In" class="btn btn-primary py-3 px-5">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
  export default {
    data () {
      return {
        heroTitle: 'Sign In',
        email: '',
        password: '',
      }
    },
    mounted () {
    },
    methods: {
      ...mapActions(['login']),
      submit() {
        this.login({
          email: this.email,
          password: this.password
        })
      },
    },
  }
</script>
