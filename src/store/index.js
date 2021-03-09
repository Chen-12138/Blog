import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShow:false,
    fontColor: false,
    Color: '#333',
    LoadingShow: false,
    LoadingTitle: '正在加载请稍后...',
    baseURL: 'http://localhost:3000'
  },
  mutations: {
    updateShow(state,data) {
      state.isShow = data
    },
    updatefont(state, data) {
      state.fontColor = data
      data ? state.Color = '#fff': state.Color = '#333'
    },
    LoadingTitleChange(state, data) {
      state.LoadingTitle = data.title;
      state.LoadingShow = data.isShow;
    }
  },
  actions: {
  },
  modules: {
  }
})
