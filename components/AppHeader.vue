<template>
  <div class="nav-toolbox-wrapper fixed-top">

    <nuxt-link to="/"
               class="logo"
               tag="a"
               aria-disabled="true"
               :class="{'logo-hover': getCurrentRoute !== '/', 'text-white': getCurrentRoute === '/'}"
    >
      <span class="logo__short">GS</span>
      <span class="logo__long">GeekShop</span>

    </nuxt-link>

    <nav>
      <ul class="navigation">
        <nuxt-link tag="li"
                   :class="{'border-light': getCurrentRoute === '/books', 'text-white': getCurrentRoute === '/books'}"
                   to="/books"
        >
          Книги
        </nuxt-link>
        <nuxt-link tag="li"
                   :class="{'border-light': getCurrentRoute === '/t_shirts', 'text-white': getCurrentRoute === '/t_shirts'}"
                   to="/t_shirts"
        >
          Футболки
        </nuxt-link>

        <nuxt-link tag="li"
                   :class="{'border-light': getCurrentRoute === '/trinkets', 'text-white': getCurrentRoute === '/trinkets'}"
                   to="/trinkets"
        >
          Всячина
        </nuxt-link>

        <!--If we have some books in our cart we add a border around the button-->
        <nuxt-link tag="li"
                   :class="{'border-light': getCurrentRoute === '/cart', 'text-white': getCurrentRoute === '/cart'}"
                   to="cart"
        >
          Корзина <span class=" badge badge-light">{{ totalAmountProductsInCart }}</span>
        </nuxt-link>

        <nuxt-link tag="li"
                   :class="{'border-light': getCurrentRoute === '/review', 'text-white': getCurrentRoute === '/review'}"
                   to="review"
        >
          Отзывы
        </nuxt-link>

        <!--<router-link class="nav-item nav-link text-white font-weight-bold"
                     to="/login"
        >{{strings.LOGIN[language]}}</router-link>-->
      </ul>
    </nav>
  </div>
</template>

<script>
  import { strings } from "~/assets/strings";

  export default {
    name: "AppHeader",

    //todo: make btn on the main screen - change language
    computed: {
      strings() {
        return strings;
      },

      getCurrentRoute() {
        return this.$route.path;
      },

      language() {
        return this.$store.getters.language;
      },
      totalAmountProductsInCart() {
        return this.$store.getters.totalAmountProductsInCart;
      }
    },
    created() {
      /*initialization of the cart from local storage*/
      if (process.client) {
        if (this.$store.getters["productsInCart"].length === 0) {
          if (localStorage.geek_shop) {
            let parsedData = JSON.parse(localStorage.geek_shop);
            this.$store.commit("setCartProducts", parsedData);
          }
          else {
            this.$store.commit("setCartProducts", []);

          }
        }

      }


    }

  };
</script>

<style scoped lang="scss">

  $link-color: #E0E0E0;

  .nav-toolbox-wrapper {
    background-color: #333;
    color: $link-color;
    width: 100%;
    font-weight: bold;

    @media (min-width: 768px) {

      padding-right: 10%;
      padding-left: 10%;

    }

    @media (max-width: 768px) {
      font-size: 75%;
    }

  }


  nav {

    /*Clearfix*/
    &::after {
      content: "";
      clear: both;
      display: table;
    }
  }

  .logo {
    font-weight: normal;
    display: inline-block;
    float: left;
    color: $link-color;
    text-decoration: none;
    font-size: 2rem;
    padding: .3rem;
    cursor: default;
    margin-left: .5rem;

    .logo__short {
      display: none;
    }

    @media (max-width: 768px) {
      font-size: 1.5rem;
      margin-top: .3rem;

      .logo__short {
        display: inline-block;
      }

      .logo__long {
        display: none;
      }
    }

  }

  .logo-hover {
    cursor: pointer;

    &:hover {
      color: #FF372F;
    }
  }

  .text-white {
    color: white;
  }

  .navigation {
    list-style: none;
    float: right;
    margin-bottom: .5rem;
    margin-top: 1rem;
    margin-right: 1rem;


    /*same as router-link*/
    li {
      display: inline-block;
      margin-right: 1rem;
      border: 1px solid #333;
      padding: .3rem;
      border-radius: 3px;
      /*remove padding from the right element*/
      &:last-child {
        margin: 0;

      }

      &:hover {
        cursor: pointer;
        border: 1px solid white;
        padding: .3rem;
        background-color: red;
      }
    }

  }
</style>
