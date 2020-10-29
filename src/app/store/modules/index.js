import  Vue from 'vue';
import  Vuex from 'vuex';
import  cart from './cart/cart';
import  product from './product/product';




Vue.use(Vuex);


 const store = new Vuex.Store({
modules: {
product,
cart
}
});

export default store;