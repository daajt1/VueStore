export const UPDATE_CART_ITEMS = 'UPDATE_CART_ITEMS';

import * as types from './mutation-types';


const mutations = {
    [types.UPDATE_CART_ITEMS] (state, payload) {
    state.cartItems = payload;
    }
    }
    