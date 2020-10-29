import axios from 'axios';

const actions = {
    getCartItems ({ commit }) {
  
        
    axios.get('/api/cart').then((response) => {
    commit(types.UPDATE_CART_ITEMS, response.data)
    });
    },

    addCartItem({ commit }, cartItem) {
        axios.post('/api/cart', cartItem).then((response) => {
            commit('UPDATE_CART_ITEMS', response.data)
        });
    },
    removeCartItem({ commit }, cartItem) {
        axios.post('/api/cart/delete', cartItem).then((response) => {
            commit('UPDATE_CART_ITEMS', response.data)
        });
    },
    removeAllCartItems({ commit }) {
        axios.post('/api/cart/delete/all').then((response) => {
            commit('UPDATE_CART_ITEMS', response.data)
        });


    }}