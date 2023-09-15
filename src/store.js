import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    posts: [],
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
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
  },
  getters: {
    getFakeData(state) {
      return state.posts;
    },
  },
});
