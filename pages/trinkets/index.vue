<template>
  <div class="my_container">
    <h1>Кружки, ручки и прочие сувениры</h1>

    <div v-if="trinkets.length !== 0" class="row">
      <!--product_type should be the same name as images folder name-->

      <!--sending book object to ShopProduct.vue component-->
      <ShopProduct v-for="trinket in trinkets"
                   :key="trinket._id"
                   :product_type="'trinkets'"
                   :product="trinket"
      />
    </div>
    <div v-else>
      <h2>Подождите, идет загрузка...</h2>
    </div>
  </div>
</template>

<script>
  import ShopProduct from "../../components/ShopProduct";


  export default {
    name: "trinkets",
    components: {
      ShopProduct
    },

    computed: {
      trinkets() {
        return this.$store.getters.getTrinkets;
      }
    },
    async fetch({ store }) {
      if (store.getters["getTrinkets"].length === 0) {
        await store.dispatch("fetch", "trinkets");
      }
    }
  };
</script>



