<template>
    <div class="row mt-5" v-if="getAllProducts().total > getAllProducts().per_page">
        <div class="col text-center">
            <div class="block-27">
                <ul>
                    <li v-if="getAllProducts().current_page - 1 > 0"><a style="cursor: pointer" @click.prevent="updateProductPage(getAllProducts().current_page - 1); fetchProducts(0)">&lt;</a></li>
                    <li v-if="getAllProducts().current_page - 2 > 0"><a style="cursor: pointer" @click.prevent="updateProductPage(getAllProducts().current_page - 2); fetchProducts(0)">{{ getAllProducts().current_page - 2 }}</a></li>
                    <li v-if="getAllProducts().current_page - 1 > 0"><a style="cursor: pointer" @click.prevent="updateProductPage(getAllProducts().current_page - 1); fetchProducts(0)">{{ getAllProducts().current_page - 1 }}</a></li>
                    <li class="active"><a>{{ getAllProducts().current_page }}</a></li>
                    <li v-if="getAllProducts().current_page + 1 <= getAllProducts().last_page"><a style="cursor: pointer" @click.prevent="updateProductPage(getAllProducts().current_page + 1); fetchProducts(0)">{{ getAllProducts().current_page + 1 }}</a></li>
                    <li v-if="getAllProducts().current_page + 2 < getAllProducts().last_page"><a style="cursor: pointer" @click.prevent="updateProductPage(getAllProducts().current_page + 2); fetchProducts(0)">{{ getAllProducts().current_page + 2 }}</a></li>
                    <li v-if="getAllProducts().current_page + 1 < getAllProducts().last_page"><a style="cursor: pointer" @click.prevent="updateProductPage(getAllProducts().current_page + 1); fetchProducts(0)">&gt;</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex'

  export default {
    methods: {
      ...mapGetters(['getAllProducts']),
      ...mapActions(['fetchProducts']),
      ...mapMutations(['updateProductPage']),
    },
    mounted () {
      this.getAllProducts()
    }
  }

</script>
