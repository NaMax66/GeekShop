<template>
  <div class="fixed-top">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand>
        <nuxt-link to="/"
                   class="logo"
                   aria-disabled="true"
                   :class="{'logo-hover': getCurrentRoute !== '/', 'text-color': getCurrentRoute === '/'}"
        >GeekShop</nuxt-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">

            <nuxt-link class="nav-link"
                       :class="{'border-light': getCurrentRoute === '/books', 'text-color': getCurrentRoute === '/books'}"
                       to="/books"
            >
              Книги
            </nuxt-link>


            <nuxt-link class="nav-link"
                       :class="{'border-light': getCurrentRoute === '/t_shirts', 'text-color': getCurrentRoute === '/t_shirts'}"
                       to="/t_shirts"
            >
              Футболки
            </nuxt-link>


            <nuxt-link class="nav-link"
                       :class="{'border-light': getCurrentRoute === '/trinkets', 'text-color': getCurrentRoute === '/trinkets'}"
                       to="/trinkets"
            >
              Всячина
            </nuxt-link>


            <nuxt-link class="nav-link"
                       :class="{'border-light': getCurrentRoute === '/cart', 'text-color': getCurrentRoute === '/cart'}"
                       to="cart"
            >
              Корзина <span class=" badge badge-light">{{ totalAmountProductsInCart }}</span>
            </nuxt-link>


            <nuxt-link class="nav-link"
                       :class="{'border-light': getCurrentRoute === '/review', 'text-color': getCurrentRoute === '/review'}"
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
  $background: rgba(51, 51, 51, 0.96);

  .nav-link {
    margin-right: 1rem;
  }

  .navbar {
    background-color: $background !important;
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;

    ul {
      min-height: 2.625rem;
    }

    .border-light {
      display: inline-block;
      border: 1px solid white;
      border-radius: 3px;
      width: inherit;
    }
    .text-color {
      color: #F56A3F !important;
    }

    a {
      text-decoration: none;
      color: $link-color !important;
    }

    li {
      display: inline-block;
      border: 1px solid $background;
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
    border: 1px solid $background;
    font-weight: normal;
    display: inline-block;
    color: $link-color;
    text-decoration: none;
    font-size: 1.5rem;
    margin-left: 1rem;
    padding: 0;
  }


</style>
