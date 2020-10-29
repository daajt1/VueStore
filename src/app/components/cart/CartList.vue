<template>
<div id="cart">
<div class="cart--header has-text-centered">
<i class="fa fa-2x fa-shopping-cart"></i>
</div>
<ul>
<li v-for="cartItem in cartItems" :key="cartItem.id" class="cart-item">
<CartListItem :cartItem="cartItem" />
</li>
<div class="cart-details">
<p>Total Quantity:
<span class="has-text-weight-bold">
{{ cartQuantity }}
</span></p>
<p class="cart-remove-all--text">
<i class="fa fa-trash"></i>Remove all
</p>
</div>
</ul>
<button class="button is-primary">
Checkout (<span class="has-text-weight-bold">${{ cartTotal }}</span>)
</button>
</div>
</template>


<script>
import {mapGetters, mapActions} from 'vuex';
import CartListItem from './CartListItem';
export default {
name: 'CartList',
computed: {
...mapGetters(['cartItems', 'cartTotal', 'cartQuantity'])
},
created() {
this.$store.dispatch('getCartItems');
},
methods: {
...mapActions(['removeAllCartItems'])
},
components: {
CartListItem
}
};
</script>

