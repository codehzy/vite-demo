<template>
  <div class="shopping-cart">
    <h2>我的购物车</h2>
    <div class="product-info" v-for="item in shoppingCart" :key="item.id">
      <span>{{ item.title }}</span>
      <div class="btn-box">
        <button @click="changeCarCount('reduce', item)">-</button>
        <span>{{ item.count }}</span>
        <button @click="changeCarCount('add', item)">+</button>
      </div>
      <van-button type="danger" size="small" @click="removeHandle(item)"
        >删除</van-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "@/store/index";
import { Product } from "@/interface";
import { toast } from "@/utility/minix";
export default defineComponent({
  name: "ShoppingCart",
  setup: () => {
    const { state, commit } = useStore();
    const shoppingCart = computed(() => {
      return state.shoppingCart;
    });
    // 更新购物车数量
    const changeCarCount = (type: string, data: Product) => {
      // 保证购物车中最小数量为1
      if (type === "reduce" && data.count <= 1) return;
      commit("CHANGE_COUNT", {
        type,
        data,
      });
    };

    // 删除购物车
    const removeCart = (data: Product) => {
      commit("REMOVE_BY_ID", data.id);
    };

    // 处理函数
    const removeHandle = (data: Product) => {
      removeCart(data);
      toast("删除成功");
    };

    // 清空购物车
    const emptyCart = (data: Product) => {
      commit("EMPTY_CART");
    };

    // 处理函数
    const emptyHandle = (data: Product) => {
      emptyCart(data);
      toast("清空成功");
    };

    return {
      shoppingCart, // 购物车列表
      changeCarCount, // 更新购物车数量
      removeHandle, // 删除购物车数据
      emptyHandle, // 清空购物车
    };
  },
});
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
