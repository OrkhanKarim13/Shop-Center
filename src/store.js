import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    posts: [],
    productDetail:null,
    isProductLoading:false,
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
    async fetchPosts({commit,state}) {
      state.isProductLoading=true

      try {

        const response = await axios.get(
          "https://fakestoreapi.com/products/"
        );
          commit('setPosts', response.data);
          state.isProductLoading=false
          console.log("stete bax",state.isProductLoading)


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
