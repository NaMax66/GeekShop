<template>
  <div class="my_container">
    <h1>Стильные футболки</h1>

    <div v-if="t_shirts.length !== 0" class="row">

      <!--sending book object to ShopProduct.vue component-->
      <!--product_type should be the same name as images folder name-->
      <ShopProduct v-for="t_shirt in t_shirts"
                :key="t_shirt._id"
                :product_type="'t_shirts'"
                :product="t_shirt"
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
    name: "t_shirts",
    components: {
      ShopProduct
    },

    computed: {
      t_shirts() {
        return this.$store.getters.getTShirts;
      }
    },
    async fetch({ store }) {
      if (store.getters['getTShirts'].length === 0) {
        await store.dispatch('fetch', 't_shirts');
      }
    }
  };
</script>

<style>

</style>

