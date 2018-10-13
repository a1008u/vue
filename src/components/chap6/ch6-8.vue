<template>
  <div>
    <button v-on:click="toggle=!toggle">切り替え</button>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <!-- SVGのパーツにトランジションを適用 -->
      <transition>
        <my-circle v-bind:fill="fill" v-bind:key="fill"></my-circle>
      </transition>
    </svg>
  </div>
</template>
 
 
<script>
import Vue from "vue"
import _ from "lodash"

Vue.component('my-circle', {
  template: '<circle cx="80" cy="75" r="50" v-bind:fill="fill"/>',
  props: {
    fill: String
  }
})

export default Vue.extend({
  data() {
    return {
      toggle: false
    }
  },computed: {
    fill() {
      return this.toggle ? 'lightpink' : 'skyblue'
    }
  }
})
</script>

<style>
.v-enter-active, .v-leave-active {
  transition: all 1s;
}
.v-leave-active {
  position: absolute;
}
.v-enter, .v-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
