<template>
  <div>
    <p class="cart-item--title is-inline">{{ cartItem.title }}</p>
    <div class="is-pulled-right">
        <i @click="addCartItem(cartItem)"
       class="fa fa-arrow-circle-up cart-item--modify"></i>
      <i @click="removeCartItem(cartItem)"
      class="fa fa-arrow-circle-down cart-item--modify"></i>
    </div>
    <div class="cart-item--content">
      <span class="cart-item--price has-text-primary has-text-weight-bold">
        {{ cartItem.price }}$ each
      </span>
      <span class="cart-item--quantity has-text-grey is-pulled-right">
        Quantity: {{ cartItem.quantity }}
      </span>
    </div>

    <ul v-if="cartItems.length > 0">
<li v-for="cartItem in cartItems" v-bind:key="cartItem" class="cart-item">
<CartListItem :cartItem="cartItem" />
</li>
<div class="cart-details">
<p>Total Quantity:
<span class="has-text-weight-bold">{{ cartQuantity }}</span>
</p>
<p class="cart-remove-all--text">
<i class="fa fa-trash"></i>Remove all
</p>
</div></ul> 
  </div>
</template>




<script>
import { mapActions } from 'vuex';
export default {
name: 'CartListItem',
props: ['cartItem'],
methods: {
...mapActions([
'addCartItem',
'removeCartItem'
])
}
}
</script>


<style scoped>
.cart-item--modify {
  cursor: pointer;
  margin: 0 1px;
}
</style> 