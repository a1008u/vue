<template>
  <div>
    <p>
      <button v-on:click="doShuffle">シャッフル</button>
      <button v-on:click="doAdd">追加</button>
    </p>
    <transition-group tag="ul" class="list" v-on:before-leave="beforeLeave" >
      <li v-for="(item, index) in list"
        v-bind:key="item"
        class="item"
        v-on:click="doRemove(index)">{{ item }}</li>
    </transition-group>
  </div>
</template>
 
 
<script>
import Vue from "vue"
import _ from "lodash"
export default Vue.extend({
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  methods: {
    doShuffle() {
      this.list = _.shuffle(this.list)
    },
    doAdd() {
      var newNumber = Math.max.apply(null, this.list) + 1
      var index = Math.floor(Math.random() * (this.list.length + 1))
      this.list.splice(index, 0, newNumber)
    },
    doRemove(index) {
      this.list.splice(index, 1)
    },
    beforeLeave: function (el) {
      var style = window.getComputedStyle(el)
      el.style.left = el.offsetLeft - parseFloat(style.marginLeft, 10) + 'px'
      el.style.top = el.offsetTop - parseFloat(style.marginTop, 10) + 'px'
    }
  }
})
</script>

<style>
.list {
  width: 240px;
  padding: 0;
}
.item {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 4px;
  width: 40px;
  height: 40px;
  background: #f5f5f5;
}
/* トランジション用スタイル */
.v-enter-active, .v-leave-active, .v-move {
  transition: all 1s;
}
.v-leave-active {
  position: absolute;
}
.v-enter, .v-leave-to {
  opacity: 0;
  background: #f9a3b1;
  transform: translateY(-30px);
}
</style>
