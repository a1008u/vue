<template>
  <div>
    <p><button v-on:click="order=!order">切り替え</button></p>
    <!-- transition-groupタグに指定した属性はラップ要素に付与される -->
    <transition-group tag="ul" class="list">
      <li v-for="item in sortedList" v-bind:key="item.id">
        {{ item.name }} {{ item.price }}円
      </li>
    </transition-group>
  </div>
</template>
 
 
<script>
import Vue from "vue"
import _ from "lodash"
export default Vue.extend({
  data() {
    return {
      order: false,
      list: [
        { id: 1, name: 'りんご', price: 100 },
        { id: 2, name: 'ばなな', price: 200 },
        { id: 3, name: 'いちご', price: 300 }
      ]
    }
  },computed: {
    // orderの値でリストの順番を反転する算出プロパティ
    sortedList() {
      // LodashのorderByメソッドを使用
      return _.orderBy(this.list, 'price', this.order ? 'desc' : 'asc')
    }
  }
})
</script>

<style>
.v-move {
  transition: transform 0.8s;
}
</style>
