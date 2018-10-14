<template>
  <div>
    <button v-on:click="toggle=!toggle">切り替え</button>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <!-- SVGのパーツにトランジションを適用 -->
      <transition>
        <ch681 v-bind:fill="fill" v-bind:key="fill"></ch681>
      </transition>
    </svg>
  </div>
</template>
 
 
<script>
import Vue from "vue"
import _ from "lodash"
import ch681 from "./ch6-8-1"

export default Vue.extend({
  components: {
    ch681
  },
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
