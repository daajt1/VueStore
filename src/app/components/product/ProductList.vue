
  <template>
  <div id="products" class="box">
    <div class="products--header has-text-centered">
      <i class="fa fa-2x fa-user-circle"></i>
    </div>
    <div class="product-list">
      <div class="product-list--item"
        v-for="productItem in productItems"
        :key="productItem.id">
        <ProductListItem :productItem="productItem" />
        <div>
          <h2 class="has-text-weight-bold">
            Daaqt store ProductList
            <span class="tag is-primary is-pulled-right has-text-white">
              Add to Cart
            </span>
          </h2>
          <p>Pc Toshiba</p>
          <span class="has-text-primary has-text-weight-bold">
            <i class="fa fa-usd"></i> 19.99
          </span>
        </div>
      </div>
    </div>
    <div class="product-count has-text-right">
      <span class="has-text-weight-bold"># of products: 4</span>
    </div>
  </div>
</template>



  <script>
import { mapGetters } from "vuex";
import ProductListItem from "./ProductListItem";
export default {
  name: "ProductList",

  created() {
    this.$store.dispatch("getProductItems");
  },
  components: {
    ProductListItem
  },
computed: 
mapGetters({
productItems: 'productItems'
}),
};
</script>  

<style lang="sass">
</style>