<template>
    <div>
        <hero-general :hero-title="heroTitle"></hero-general>

        <div class="container">
            <div class="row justify-content-center block-9">
                <div class="col-xl-5">
                    <form id="register-form" class="bg-white p-5 contact-form">
                        <div class="form-group">
                            <input type="text" :validate="'required'" name="name" v-model="name" class="form-control" placeholder="Name">
                        </div>
                        <div class="form-group">
                            <input type="email" :validate="'required|email'" name="email" v-model="email" class="form-control" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <input type="password" :validate="'required'" name="password" v-model="password" class="form-control" placeholder="Password">
                        </div>
                        <div class="form-group">
                            <input type="password" :validate="'required|confirmed:password'" v-model="password_confirmation" name="password_confirmation" class="form-control" placeholder="Password">
                        </div>
                        <div class="form-group text-center">
                            <input type="button" id="register" @click.prevent="submit()" value="Register" class="btn btn-primary py-3 px-5">
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
        heroTitle: 'Register',
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    },
    mounted () {
    },
    methods: {
      ...mapActions(['register']),
      submit() {
        this.register({
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        })
      },
    },

  }
</script>
