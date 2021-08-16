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
    <van-loading type="spinner" color="#1989fa" v-else />
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
import { useStore } from "@/store/index";
import { toast } from "@/utility/minix";

export default defineComponent({
  name: "Product",
  setup: () => {
    const products = ref<Product[]>([]);
    const loading = ref(false);
    const { commit, getters } = useStore();

    // 获取产品列表
    const getProducts = async () => {
      loading.value = true;
      products.value = await apiGetProducts();
      loading.value = false;
    };

    // 加入购物车
    const addToCart = (product: Product) => {
      commit("ADD_TO_CARD", {
        title: product.title,
        count: 1,
        id: product.id,
      });
    };

    // 判断是否在购物车中存在
    const isInCart = (product: Product) => {
      return getters.isInCart(product);
    };

    const addHandle = (product: Product) => {
      // 如果已经存在
      if (isInCart(product)) return toast("已存在");
      addToCart(product);
      toast("添加成功");
    };

    getProducts();

    return {
      products, // 商品列表
      loading, // 加载状态
      addHandle, // 添加购物车
    };
  },
});
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
