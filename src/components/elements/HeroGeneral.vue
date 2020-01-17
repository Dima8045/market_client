<template>
    <div>
        <div class="hero-wrap hero-bread" style="background-image: url('images/bg_1.jpg');">
            <div class="container">
                <div class="row no-gutters slider-text align-items-center justify-content-center">
                    <div class="col-md-9 ftco-animate text-center">
                        <p class="breadcrumbs"><span class="mr-2"><router-link :to="{ name: 'home' }">Home</router-link></span> <span>{{ heroTitle }}</span></p>
                        <h1 class="mb-0 bread">{{ heroTitle }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: [
      'heroTitle'
    ],
    mounted() {
        }
    }
</script>
