<template>
  <!--todo сделать отступ справа для кнопок на мобильном виде-->
  <div class="col-lg-6 product_card">
    <div class="card-body pt-3">
      <h5 class="card-title mb-2">{{ product.title }}</h5>
      <div class="row pt-3">
        <div class="p-0 col-6 product_img_container">
          <img class="product_img" :src="getImgPath" :alt="product.title"/>
        </div>
        <div class="col-6 text-right pr-md-5">
          <!--округляем представление стоимости книги-->
          <p class="lead">Цена: <span class="font-weight-bold">{{ product.price | getNicePriceLook  }}</span> руб.
          </p>
          <!--next options shows depends on special product's properties-->
          <p class="lead" v-if="product.material">Материал: <span class="font-weight-bold">{{ product.material }}</span></p>
          <p class="lead" v-if="product.color">Цвет: <span class="font-weight-bold">{{ product.color }}</span></p>
          <p class="lead" v-if="product.size">Размер: <span class="font-weight-bold">{{ product.size }}</span></p>


          <b-button @click="addProductToCart" class="btn btn-warning mt-4">В корзину</b-button>

          <!--добавляем всплывающее сообщение рядом с кнопкой "В корзину"-->
          <b-toast class="mt-3" :id="'toast' + this.product._id"
                   :title="`В корзине ${productInCartAmount} шт.` " auto-hide-delay="5000" static>{{this.product.title}}
          </b-toast>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "shop-product",
    props: ["product", "product_type"],
    computed: {
      productInCartAmount() {
        return this.$store.getters.productInCartAmount(this.product._id);

      },
      getImgPath() {
        if (this.product.img) {
          let img = '';
          try {
            img = require(`~/assets/img/${ this.product_type }/${ this.product.img }`)
          } catch (e) {
            try {
              /*todo send errors to server*/
              console.log('add a picture for product with id: ' +  this.product._id);
              img = require(`~/assets/img/tag_faces-24px.svg`)
            }
            catch (e) {
              console.log('Put a picture as a placeholder or add a picture for product with id: ' +  this.product._id);
            }
          }

          return img;
        }
      }
    },
    filters: {
      getNicePriceLook(price){
        return Math.round(price)
      }
    },
    methods: {
      addProductToCart() {
        //add to cart. We should show product and it's type
        this.$store.dispatch("addProductToCart", { product: this.product, type: this.product_type });
        //show info message
        this.makeToast();
      },

      makeToast() {
        this.$bvToast.show(`toast${this.product._id}`);
      }
    }
  };
</script>

<style scoped>
  .product_card {
    margin-top: 2rem;
  }

  .product_img {
    border-radius: 4px;
    max-height: 25rem;
    max-width: 100%;

  }

</style>
