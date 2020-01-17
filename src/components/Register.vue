<template>
    <div>
        <hero-general :hero-title="heroTitle"></hero-general>

        <div class="container">
            <div class="row justify-content-center block-9">
                <div class="col-xl-5">
                    <form id="register-form" class="bg-white p-5 contact-form">
                        <div class="form-group">
                            <input type="email" :validate="'required'" name="email" v-model="email" class="form-control" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <input type="password" :validate="'required'" name="password" v-model="password" class="form-control" placeholder="Password">
                        </div>
                        <div class="form-group">
                            <input type="password" :validate="'required|confirmed:password'" name="password_confirmation" class="form-control" placeholder="Password">
                        </div>
                        <div class="form-group text-center">
                            <input type="button" id="register" @click.prevent="register()" value="Register" class="btn btn-primary py-3 px-5">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        heroTitle: 'Register',
        email: '',
        password: '',
      }
    },
    mounted () {
    }
  }
</script>
