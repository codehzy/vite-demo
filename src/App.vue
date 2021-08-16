<template>
  <nav-bar :count="count" :active="activeRouteName"></nav-bar>
  <div class="body">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import NavBar from "@components/NavBar.vue";
import { useStore } from "@/store/index";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "App",
  components: {
    NavBar,
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    // 购物车中物品件数
    const count = computed(() => {
      return store.state.shoppingCart.length;
    });

    // active颜色
    const activeRouteName = computed((): string => {
      return route.name?.toString() || "";
    });

    return {
      count,
      activeRouteName,
    };
  },
});
</script>

<style lang="less"></style>
