import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    message: "初期メッセージ",
    count: 0,
    list: [
      { id: 1, name: "りんご", price: 100 },
      { id: 2, name: "ばなな", price: 200 },
      { id: 3, name: "いちご", price: 300 }
    ]
  },
  getters: {
    // 単純にステートを返す
    count(state, getters, rootState, rootGetter) {
      return state.count;
    },
    // リストの各要素の price プロパティの中から最大数値を返す
    max(state) {
      return state.list.reduce((a, b) => {
        return a > b.price ? a : b.price;
      }, 0);
    },
    // 引数付きゲッター
    // listからidが一致する要素を返す
    item(state) {
      // 引数を使用するためアロー関数を返している
      return id => state.list.find(el => el.id === id);
    },
    // 別のゲッターを使うこともできる
    name(state, getters) {
      return id => getters.item(id).name;
    },
    // messageを使用するゲッター
    message(state) {
      return state.message;
    }
  },
  mutations: {
    // メッセージを変更するミューテーション
    setMessage(state, payload) {
      state.message = payload.message;
    }
  },
  actions: {
    // メッセージの更新処理
    doUpdate({ commit }, message) {
      commit("setMessage", {
        message
      });
    }
  }
});

export default store;
