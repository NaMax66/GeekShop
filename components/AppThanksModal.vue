<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div>
          <img src="~/assets/img/tag_faces-24px.svg" alt="The big funny Smile">
          <h3>Спасибо за отзыв!</h3>
          <button @click="$emit('closeThanks')">Закрыть</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AppThanksModal"
  };
</script>

<style scoped lang="scss">
  $accent_color: #F56A3F;

  .modal-mask {
    margin-top: 3.4rem;

    /*Меню изменяется, нужен другой отступ*/
    @media (min-width: 769px) {
      margin-top: 3.7rem;
    }

    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    display: table;
    transition: opacity .3s ease;

    .modal-wrapper {
      display: table-cell;
      vertical-align: middle;

      .modal-container {
        width: 15rem;
        height: 20rem;
        transform: translateY(-5%);
        margin: 0 auto;
        padding: 2.25rem 1rem;
        background-color: #fff;
        color: black;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Roboto, sans-serif;
        text-align: center;


        img {
          height: 40%;

        }

        h3 {
          font-family: inherit;
        }

        button {
          position: absolute;
          bottom: 1rem;
          font-size: 0.875rem;
          font-family: inherit;
          background: none;
          border: 1px solid $accent_color;
          height: 3rem;
          background: #fff;
          border-radius: 4px;
          font-style: normal;
          font-weight: bold;
          line-height: 16px;
          width: 90%;
          margin-left: -45%;

          &:hover {
            background-color: darken($accent_color, 10%);
            color: #fff;
            border: 1px solid white;
          }

          &:active {
            transform: translateY(2px);
          }

          &:focus {
            outline: none;
          }
        }
      }
    }
  }

</style>
