<template>
  <div class="nav-bar">
    <router-link to="/">商品列表</router-link> |
    <router-link to="/shoppingCart">购物车</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "NavBar",
  setup: () => {},
});
</script>

<style lang="less" scoped></style>
