import { Product } from "@/interface";
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface State {
  shoppingCart: Product[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    shoppingCart: [],
  },
  getters: {
    // 是否在购物车中已存在
    isInCart(state) {
      return (data: any) => {
        return state.shoppingCart.findIndex((item) => item.id) > -1
          ? true
          : false;
      };
    },
  },
  mutations: {
    // 添加购物车
    ADD_TO_CARD(state, data) {
      state.shoppingCart.push(data);
    },
    // 更新购物车数量
    CHANGE_COUNT(state, { type, data }) {
      return state.shoppingCart.map((item) => {
        if (data.id === item.id) {
          item.count += type === "add" ? 1 : -1;
        }
      });
    },
    // 删除购物车
    REMOVE_BY_ID(state, id) {
      state.shoppingCart = state.shoppingCart.filter((item) => item.id != id);
    },
    // 清空购物车
    EMPTY_CART(state) {
      state.shoppingCart = [];
    },
  },
});

export function useStore() {
  // 通过key给store提供类型
  return baseUseStore(key);
}
