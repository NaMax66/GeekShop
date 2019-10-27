<template>
  <section>
    <h1>{{ book.title }}</h1>
    <button @click="back">Go back</button>
  </section>
</template>

<script>
  export default {
    name: "_id.vue",
    methods: {
      back(){
        this.$router.push('/users')
      }
    },
    validate({params}) {
      //на сервере мы не можем обращаться к this. Нужные данные берем из контектса
      console.log('validate');
      //todo: сделать чтобы в маршруте был только id
      return true;
      ///^\d+$/.test(params.id) //в маршруте должны быть только цифры
    },
    /*это на сервере*/
    async asyncData({$axios, params}) {
      const user = await $axios.$get('/api/books/' + book.id);
      return {book}
    }
  };
</script>

<style scoped>

</style>
