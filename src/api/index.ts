import data from "@/api/data";
import { Product } from "@/interface";

/**
 * 获取产品列表
 */
export const apiGetProducts = () => {
  return new Promise<Product[]>((resolve, reject) => {
    // 模拟接口请求
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};
