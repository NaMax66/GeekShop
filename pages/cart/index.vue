<template>
  <div class="pt-5 mt-5 container">

    <!--if we have some books in the storage - we show this block-->
    <!--:product_type="product.type" this needs for right img path-->
    <div class="row" v-if="productsInCart.length">
      <div class="cart col-12">
        <CartProduct v-for="product in productsInCart"
                  :product="product"
                  :product_type="product.type"
                  :key="product._id"
        />
      </div>

      <!--footer menu-->
      <div class="d-flex justify-content-between mb-4 mt-5 col-12 align-self-end">
        <button @click="clearCart" class="btn btn-danger"
                :class="{'disabled': false}"
        >Удалить всё
        </button>
        <h3 class="total_price ml-2"
        >Общая сумма заказа: {{totalPrice | getNicePrice}}</h3>
      </div>
    </div>
    <div v-else class="mt-5">
      <h1>Здесь будут ваши покупки :)</h1>
    </div>

  </div>
</template>

<script>
  import CartProduct from "~/components/CartProduct";

  export default {
    name: "AppCart",
    components: {
      CartProduct
    },

    computed: {
      productsInCart() {
        return this.$store.getters.productsInCart;
      },

      totalPrice() {
        return this.$store.getters.totalPrice;
      }
    },

    filters: {
      getNicePrice(value) {
        return (Math.round(value)).toLocaleString("ru") + " руб.";
      }
    },

    methods: {
      clearCart() {
        this.$store.dispatch("clearCart");
      }
    }
  };
</script>

<style scoped>

  @media (max-width: 768px) {
    .total_price {
      font-size: 1.2rem;
    }
  }

  .container {
    align-items: start;
  }

  .btn {
    max-height: 2.4rem;
    white-space: nowrap;
  }

</style>



