<template>
  <div class="my_container">
    <h1>Книги для прокачки скилов</h1>

    <div v-if="books.length !== 0" class="row">

      <!--sending book object to ShopProduct.vue component-->
      <ShopProduct v-for="book in books"
                :key="book._id"
                :product_type="'books'"
                :product="book"
      />
    </div>
    <div v-else>
      <h2>Подождите, идет загрузка...</h2>
    </div>
  </div>
</template>

<script>
  import ShopProduct from "~/components/ShopProduct";
  export default {
    name: "AppShop",
    components: {
      ShopProduct
    },

    computed: {
      books() {
        return this.$store.getters.getBooks;
      }
    },

    async fetch({ store }) {
      if (store.getters['getBooks'].length === 0) {
        await store.dispatch('fetch', 'booksDB');
      }
    }
  };
</script>



