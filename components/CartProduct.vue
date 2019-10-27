<template>
  <transition name="shop-book-fade">
    <div class="card-body text-left" v-if="show">
      <div class="row">
        <div class="col-4 p-0 ">
          <img class="cart_img" :src="getImgPath" :alt="product.title"/>
        </div>
        <p class="card-title col-4">{{ product.title }}</p>
        <div class="col-4 text-right">
          <div class="btn-group mr-2 mt-2" role="group" aria-label="Basic example">
            <button @click="changeAmount(-1)" type="button" class="btn btn-secondary"> -</button>
            <span class="btn disabled counter">  {{ product.amount }}  </span>
            <button @click="changeAmount(1)" type="button" class="btn btn-secondary"> +</button>
          </div>
          <button @click="deleteBookFromCart"
                  class="btn btn-warning mt-2 mr-1 delete_btn">Убрать
          </button>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
  export default {
    name: "CartBook",
    data() {
      return {
        show: true
      };
    },

    props: ["product", "product_type"],

    computed: {
      getImgPath() {
        if (this.product.img) {
          return require(`~/assets/img/${this.product_type}/${this.product.img}`);
        }
      }
    },

    methods: {
      changeAmount(addAmount) {
        this.$store.dispatch("changeAmount", {
          amount: this.product.amount + addAmount,
          _id: this.product._id
        });
      },
      deleteBookFromCart() {
        this.$store.dispatch("deleteProductFromCart", this.product._id);
        this.show = !this.show;
      }
    }
  };
</script>

<style>
  .shop-book-fade-enter-active, .shop-book-fade-leave-active {
    transition: opacity .2s ease;
  }

  .cart_img {
    max-height: 10rem;
    border-radius: 4px;
  }

  .shop-book-fade-enter, .shop-book-fade-leave-to {
    opacity: 0;
  }

  @media (max-width: 992px) {

    .delete_btn {
      margin-top: 3rem !important;
    }
    .counter {
      width: 3rem;
    }
  }

</style>
