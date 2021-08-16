<template>
  <div class="product">
    <div v-if="!loading">
      <div class="product-list" v-for="(item, index) in products" :key="index">
        <span class="name">{{ item.title }}</span>
        <span class="price">￥{{ item.price }}</span>
        <span class="count">{{ item.count }}件</span>
        <van-button type="primary" size="small" @click="addHandle(item)"
          >加入购物车</van-button
        >
      </div>
    </div>
    <van-loading v-else />
  </div>
  <div class="logo">
    <img src="https://cn.vitejs.dev/logo.svg" alt="" class="img" />
    <img src="https://cn.vitejs.dev/logo.svg" alt="" class="img" />
    <img src="https://cn.vitejs.dev/logo.svg" alt="" class="img" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { apiGetProducts } from "@/api/index";
import { Product } from "@/interface/index";

export default defineComponent({
  name: "Product",
  setup: () => {
    const products = ref<Product[]>([]);
    const loading = ref(false);

    // 获取产品列表
    const getProducts = async () => {
      loading.value = true;
      products.value = await apiGetProducts();
      loading.value = false;
    };
    getProducts();

    // 加入购物车
    const addToCart = (product: Product) => {};

    const addHandle = (product: Product) => {};

    return { products, loading, addHandle };
  },
});
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
