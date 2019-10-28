<template>
  <div class="my_container text-center">
    <div>
      <logo/>
      <h1 class="title">
        GeekShop - мазазин для увлеченных людей
      </h1>
      <h2 class="subtitle">
        Книги, футболки, всячина - для тех, кто ценит своё развитие и любит стильную, приятную на вид одежду.
      </h2>
      <div class="links">
        <nuxt-link
          to="/books"
          class="button--orange"
        >
          Книги
        </nuxt-link>
        <nuxt-link
          to="/t_shirts"
          class="button--gray ml-3 mr-3"
        >
          Футболки
        </nuxt-link>

        <nuxt-link
          to="/trinkets"
          class="button--orange"
        >
          Всячина
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from "~/components/Logo.vue";

  export default {
    components: {
      Logo
    }
  };
</script>

<style lang="scss">

  $accent_color: #F56A3F;
  $soft_gray: #35495e;

  .title {
    display: block;
    font-weight: 300;
    font-size: 4rem;
    color: $soft_gray;
    letter-spacing: 1px;
  }

  .subtitle {
    margin-top: 1rem;
    font-weight: 300;
    font-size: 2rem;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

  .button--gray {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid $soft_gray;
    color: $soft_gray;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--gray:hover {
    color: #fff;
    background-color: $soft_gray;
    text-decoration: none;
  }

  .button--orange {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid $accent_color;
    color: $accent_color;
    text-decoration: none;
    padding: 10px 30px;
  }

  .button--orange:hover {
    color: #fff;
    background-color: $accent_color;
    text-decoration: none;
  }
</style>
