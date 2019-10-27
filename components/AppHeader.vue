<template>
  <div class="fixed-top">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>
        <nuxt-link to="/"
                   class="logo"
                   aria-disabled="true"
                   :class="{'logo-hover': getCurrentRoute !== '/', 'text-white': getCurrentRoute === '/'}"
        >GeekShop</nuxt-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">

            <nuxt-link class="nav-link"
                       :class="{'border-light': getCurrentRoute === '/books', 'text-white': getCurrentRoute === '/books'}"
                       to="/books"
            >
              Книги
            </nuxt-link>


            <nuxt-link class="nav-link"
                       :class="{'border-light': getCurrentRoute === '/t_shirts', 'text-white': getCurrentRoute === '/t_shirts'}"
                       to="/t_shirts"
            >
              Футболки
            </nuxt-link>


            <nuxt-link class="nav-link"
                       :class="{'border-light': getCurrentRoute === '/trinkets', 'text-white': getCurrentRoute === '/trinkets'}"
                       to="/trinkets"
            >
              Всячина
            </nuxt-link>


            <nuxt-link class="nav-link"
                       :class="{'border-light': getCurrentRoute === '/cart', 'text-white': getCurrentRoute === '/cart'}"
                       to="cart"
            >
              Корзина <span class=" badge badge-light">{{ totalAmountProductsInCart }}</span>
            </nuxt-link>


            <nuxt-link class="nav-link"
                       :class="{'border-light': getCurrentRoute === '/review', 'text-white': getCurrentRoute === '/review'}"
                       to="review"
            >
              Отзывы
            </nuxt-link>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

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

  .nav-link {
    margin-right: 1rem;
  }

  .navbar {
    background-color: #333;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;

    .border-light {
      display: inline-block;
      border: 1px solid white;
      border-radius: 3px;
      color: #fff !important;
    }

    a {
      text-decoration: none;
      color: $link-color !important;
    }

    li {
      display: inline-block;
      border: 1px solid #333;
      border-radius: 3px;
      color: #fff;


      &:hover {
        cursor: pointer;
        border: 1px solid white;
        background-color: red;
      }
    }
  }

  .logo {
    font-weight: normal;
    display: inline-block;
    color: $link-color;
    text-decoration: none;
    font-size: 1.5rem;
    margin: 0;
    padding: 0;
  }

  /*.nav-toolbox-wrapper {
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

    !*Clearfix*!
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

    li {
      display: inline-block;
      margin-right: 1rem;
      border: 1px solid #333;
      padding: .3rem;
      border-radius: 3px;
      !*remove padding from the right element*!
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

  }*/
</style>
