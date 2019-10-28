export const state = () => ({
  language: "en",
  books: [],
  trinkets:[],
  t_shirts: [],
  productsInCart: [],
  reviews: [
    {
      nickName: "Пётр",
      pubDate: "24.10.2019",
      score: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis debitis molestias nostrum odio reprehenderit."
    },
    {
      nickName: "Анна Павловна",
      pubDate: "24.09.2019",
      score: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis debitis molestias nostrum odio reprehenderit consectetur adipisicing."
    },
    {
      nickName: "SomeFunnyNick",
      pubDate: "14.09.2019",
      score: 3,
      text: "Lorem ipsum dolor sit amet, elit. Blanditiis debitis molestias nostrum odio reprehenderit."
    }
  ]
});

/**
 * GETTERS
 */

export const getters = {
  getReviews(state) {
    return state.reviews;
  },

  language(state) {
    return state.language;
  },

  getBooks(state) {
    return state.books;
  },

  getTShirts(state) {
    return state.t_shirts
  },

  getTrinkets(state) {
    return state.trinkets
  },

  productsInCart(state) {
    return state.productsInCart;
  },

  totalAmountProductsInCart(state) {
    if (!state.productsInCart.length)
      return 0;

    return state.productsInCart.reduce((sum, productInCart) => {
      return sum + productInCart.amount;
    }, 0);
  },

  productInCartAmount(state){
    return function(_id) {
      let amount = 0;

      if (!state.productsInCart.length)
        return 0;

      else {
        state.productsInCart.forEach(el => {
          if (el._id === _id)
            amount = el.amount;
        });
      }
      return amount;
    };
  },

  totalPrice(state) {
    let totalSum = 0;
    if (!state.productsInCart.length)
      return 0;

    else {
      state.productsInCart.forEach(el => {
        totalSum += el.price * el.amount;
      });
      return totalSum;
    }
  }
};

/**
 * MUTATIONS
 */

export const mutations = {
  addReview(state, payload) {
    state.reviews = [payload, ...state.reviews];
  },

  /*todo Сделать интерфейс на английском*/
  changeLang(state, payload) {
    state.language = payload;
  },

  setProducts(state, payload) {
    if (payload.type === 'booksDB') {
      state.books = payload.data;
    }
    if (payload.type === 't_shirts') {
     state.t_shirts = payload.data;
    }
    if (payload.type === 'trinkets') {
      state.trinkets = payload.data;
    }
  },

  setCartProducts(state, payload) {
    state.productsInCart = payload;
  },

  changeProductInCartAmount(state, payload) {
    const product = state.productsInCart.find(el => el._id === payload._id);
    product.amount = payload.amount;
  },

  updateLocalStorage(state, payload) {
    if (process.client) {
      localStorage.geek_shop = JSON.stringify(state.productsInCart);
    }
  },

  addProductToCart(state, payload) {
    const product = state.productsInCart.find(el => el._id === payload['product']._id);
    if (!product) {
      const cartProduct = Object.assign({}, payload['product']);
      cartProduct.amount = 1;
      cartProduct.type = payload['type'];
      state.productsInCart = [cartProduct, ...state.productsInCart];
    } else {
      product.amount +=1;
    }
  },

  deleteProductFromCart(state, _id) {
    state.productsInCart = state.productsInCart.filter(el => el._id !== _id);
  },
  clearCart(state){
    state.productsInCart = [];
  }
};

/**
 * ACTIONS
 */

export const actions = {

  /*in payload we received collection name that we needed*/
  async fetch({ commit }, payload) {
    const products = await this.$axios.$get("/api/" + payload);

    commit("setProducts", { type: payload, data: products } );
  },

  addReview({ commit }, payload) {
    commit("addReview", payload);
  },

  clearCart({ commit }) {
    if (confirm("Убрать все книги из корзины?")) {
      commit("clearCart");
      commit("updateLocalStorage");
    }
  },

  changeAmount({ commit }, payload) {
    if (payload.amount === 0) {
      commit("deleteProductFromCart", payload._id);
      commit("updateLocalStorage");
      return;
    }

    commit("changeProductInCartAmount", payload);
    commit("updateLocalStorage");
  },

  deleteProductFromCart({ commit }, _id) {
    commit("deleteProductFromCart", _id);
    commit("updateLocalStorage");
  },

  addProductToCart({ commit }, product) {
    commit("addProductToCart", product);
    commit("updateLocalStorage");
  }
};

