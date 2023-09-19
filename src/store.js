import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    posts: [],
    productDetail:null
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setProductDetail(state, data) {
      state.productDetail = data;
    },
  },
  actions: {
    async fetchPosts({commit}) {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/"
        );
          commit('setPosts', response.data);
        console.log("response", response.data);
      } catch (error) {
        console.error("error:", error);
      }
    },
    async getProductDetail({commit},id) {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
          commit('setProductDetail', response.data);
        console.log("response", response.data);
      } catch (error) {
        console.error("error:", error);
      }
    },
  },
  getters: {
    getFakeData(state) {
      return state.posts;
    },
    getProductDetailInfo(state){
      return state.productDetail;

    }
  },
});
